import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CvService} from "../../services/cv.service";
import {catchError, map, Observable, of, switchMap, tap} from "rxjs";
import {Person} from "../../../Models/Person";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit{
  form: FormGroup= new FormGroup({
    firstname: new FormControl(),
    name: new FormControl(),
    cin: new FormControl() ,
    path: new FormControl(),
    age: new FormControl() ,
    job: new FormControl(),
  });
  id$: Observable<number> = of(0);
  person$: Observable<Person> = of(new Person());


  constructor(private toastService: ToastrService,
              private activatedRoute: ActivatedRoute,
              private cvService: CvService,
              private router: Router) {}

  addPersonne(formulaire: NgForm) {
    console.log(formulaire);
    this.cvService.addPersonne(formulaire.value).subscribe();
  }

  ngOnInit(): void {
    console.log('Waa');
    this.id$ = this.activatedRoute.params.pipe(map((params) => params['id']));

    this.person$ = this.id$.pipe(
      switchMap((id) =>
        id
          ? this.cvService.getPersonneById(id).pipe(map((c) => (c ? c : new Person())))
          : of(new Person())
      )
    );

    this.person$.subscribe((p: Person) => {
      console.log('cv details  ');
      console.log(p);
      this.createForm(p);
    });

  }

  private createForm(cv: Person): void {
    this.form = new FormGroup({
      firstname: new FormControl(cv.firstname, [Validators.required]),
      name: new FormControl(cv.name,[Validators.required]),
      cin: new FormControl(cv.cin, [
        Validators.required,
        Validators.minLength(8),
      ]) as FormControl, // Explicitly specify type here
      path: new FormControl(cv.path),
      age: new FormControl(cv.age, [Validators.required, Validators.min(18)]) as FormControl, // Explicitly specify type here
      job: new FormControl(cv.job, [Validators.required]),
    });

  }



  onFormSubmit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          console.log('in the switch map');
          const id = params['id'];
          return id
            ? this.cvService.updatePersonne({ id, ...this.form.value }).pipe(
              tap(() => {
                this.toastService.success('Cv updated successfully');
                this.router.navigate(['cv', id]);
              })
            )
            : this.cvService.addPersonne(this.form.value).pipe(
              tap(() => {
                this.form.reset();
                this.router.navigate(['']);
              })
            );
        })
      )
      .subscribe();
  }


  @HostListener('window:beforeunload')
  canDeactivate() {
    return this.form.dirty
      ? window.confirm('You have unsaved changes. Do you really want to leave?')
      : true;
  }
}
