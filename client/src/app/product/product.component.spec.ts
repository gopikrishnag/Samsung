import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ProductComponent } from './product.component';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../store/reducers/product.reducer';
import { ProductEffects } from '../store/effects/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent, ProductListComponent ],
      imports: [ScrollDispatchModule,
        HttpClientModule,
        StoreModule.forRoot({
          productState: ProductReducer ,
        }),
        EffectsModule.forRoot([ProductEffects])],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  function setup() {
     fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.debugElement.componentInstance;
    return { fixture, app };
  }

  it('should create the app', async(() => {
    const { app } = setup();
    expect(app).toBeTruthy();
  }));

  it('should have h2 tag as  - Product ', async(() => {
    const { app } = setup();
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const h2tag = compile.querySelector('h2');
   // console.log('test ', h2tag, h2tag.textContent);
    expect(h2tag.textContent).toBe('Products');
  }));
});
