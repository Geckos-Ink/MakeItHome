"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[772],{6772:(N,d,n)=>{n.r(d),n.d(d,{default:()=>q});var v=n(6814),o=n(6223),g=n(2296),f=n(5986),l=n(4170),p=n(617),h=n(4516),x=n(5940),u=n(1331),Z=n(4748),y=n(738),e=n(9212),I=n(4855);const w=["signInNgForm"];function A(t,m){if(1&t&&(e.TgZ(0,"fuse-alert",8),e._uU(1),e.qZA()),2&t){const r=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",r.alert.type)("@shake","error"===r.alert.type),e.xp6(1),e.hij(" ",r.alert.message," ")}}function b(t,m){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function U(t,m){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function T(t,m){1&t&&e._UZ(0,"mat-icon",29),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function _(t,m){1&t&&e._UZ(0,"mat-icon",29),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-slash")}function J(t,m){1&t&&(e.TgZ(0,"span"),e._uU(1," Sign in "),e.qZA())}function C(t,m){1&t&&e._UZ(0,"mat-progress-spinner",48),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const F=()=>["/sign-up"],Q=()=>["/forgot-password"],q=[{path:"",component:(()=>{class t{constructor(r,s,i,a){this._activatedRoute=r,this._authService=s,this._formBuilder=i,this._router=a,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["hughes.brian@company.com",[o.kI.required,o.kI.email]],password:["admin",o.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const r=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(r)},r=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(u.gz),e.Y36(I.e),e.Y36(o.QS),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-in"]],viewQuery:function(s,i){if(1&s&&e.Gf(w,5),2&s){let a;e.iGM(a=e.CRH())&&(i.signInNgForm=a.first)}},standalone:!0,features:[e.jDz],decls:82,vars:24,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"appearance","showIcon","type"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[3,"diameter","mode"]],template:function(s,i){if(1&s){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Sign in"),e.qZA(),e.TgZ(7,"div",6)(8,"div"),e._uU(9,"Don't have an account?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Sign up "),e.qZA()(),e.TgZ(12,"fuse-alert",8),e._uU(13," You are browsing "),e.TgZ(14,"strong"),e._uU(15,"Fuse Demo"),e.qZA(),e._uU(16,'. Click on the "Sign in" button to access the Demo and Documentation. '),e.qZA(),e.YNc(17,A,2,5,"fuse-alert",9),e.TgZ(18,"form",10,11)(20,"mat-form-field",12)(21,"mat-label"),e._uU(22,"Email address"),e.qZA(),e._UZ(23,"input",13),e.YNc(24,b,2,0,"mat-error",14)(25,U,2,0,"mat-error",14),e.qZA(),e.TgZ(26,"mat-form-field",12)(27,"mat-label"),e._uU(28,"Password"),e.qZA(),e._UZ(29,"input",15,16),e.TgZ(31,"button",17),e.NdJ("click",function(){e.CHM(a);const c=e.MAs(30);return e.KtG(c.type="password"===c.type?"text":"password")}),e.YNc(32,T,1,1,"mat-icon",18)(33,_,1,1,"mat-icon",18),e.qZA(),e.TgZ(34,"mat-error"),e._uU(35," Password is required "),e.qZA()(),e.TgZ(36,"div",19)(37,"mat-checkbox",20),e._uU(38," Remember me "),e.qZA(),e.TgZ(39,"a",21),e._uU(40,"Forgot password? "),e.qZA()(),e.TgZ(41,"button",22),e.NdJ("click",function(){return i.signIn()}),e.YNc(42,J,2,0,"span",14)(43,C,1,2,"mat-progress-spinner",23),e.qZA(),e.TgZ(44,"div",24),e._UZ(45,"div",25),e.TgZ(46,"div",26),e._uU(47,"Or continue with"),e.qZA(),e._UZ(48,"div",25),e.qZA(),e.TgZ(49,"div",27)(50,"button",28),e._UZ(51,"mat-icon",29),e.qZA(),e.TgZ(52,"button",28),e._UZ(53,"mat-icon",29),e.qZA(),e.TgZ(54,"button",28),e._UZ(55,"mat-icon",29),e.qZA()()()()(),e.TgZ(56,"div",30),e.O4$(),e.TgZ(57,"svg",31)(58,"g",32),e._UZ(59,"circle",33)(60,"circle",34),e.qZA()(),e.TgZ(61,"svg",35)(62,"defs")(63,"pattern",36),e._UZ(64,"rect",37),e.qZA()(),e._UZ(65,"rect",38),e.qZA(),e.kcU(),e.TgZ(66,"div",39)(67,"div",40)(68,"div"),e._uU(69,"Welcome to"),e.qZA(),e.TgZ(70,"div"),e._uU(71,"our community"),e.qZA()(),e.TgZ(72,"div",41),e._uU(73," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(74,"div",24)(75,"div",42),e._UZ(76,"img",43)(77,"img",44)(78,"img",45)(79,"img",46),e.qZA(),e.TgZ(80,"div",47),e._uU(81,"More than 17k people joined us, it's your turn"),e.qZA()()()()()}if(2&s){const a=e.MAs(30);e.xp6(10),e.Q6J("routerLink",e.DdM(22,F)),e.xp6(2),e.Q6J("appearance","outline")("showIcon",!1)("type","info"),e.xp6(5),e.Q6J("ngIf",i.showAlert),e.xp6(1),e.Q6J("formGroup",i.signInForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",i.signInForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",i.signInForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===a.type),e.xp6(1),e.Q6J("ngIf","text"===a.type),e.xp6(4),e.Q6J("color","primary")("formControlName","rememberMe"),e.xp6(2),e.Q6J("routerLink",e.DdM(23,Q)),e.xp6(2),e.Q6J("color","primary")("disabled",i.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",!i.signInForm.disabled),e.xp6(1),e.Q6J("ngIf",i.signInForm.disabled),e.xp6(8),e.Q6J("svgIcon","feather:facebook"),e.xp6(2),e.Q6J("svgIcon","feather:twitter"),e.xp6(2),e.Q6J("svgIcon","feather:github")}},dependencies:[u.rH,y.W,v.O5,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.UX,o.sg,o.u,l.lN,l.KE,l.hX,l.TO,l.R9,h.c,h.Nt,g.ot,g.lW,g.RK,p.Ps,p.Hw,f.p9,f.oG,x.Cq,x.Ou],encapsulation:2,data:{animation:Z.L}})}return t})()}]}}]);