"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[252],{5252:(C,d,o)=>{o.r(d),o.d(d,{default:()=>b});var c=o(6814),r=o(6223),g=o(2296),n=o(4170),f=o(4516),u=o(5940),p=o(1331),h=o(4748),w=o(738),v=o(4716),e=o(9212),x=o(4855);const y=["forgotPasswordNgForm"];function Z(t,l){if(1&t&&(e.TgZ(0,"fuse-alert",36),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake","error"===s.alert.type),e.xp6(1),e.hij(" ",s.alert.message," ")}}function A(t,l){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function F(t,l){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function P(t,l){1&t&&(e.TgZ(0,"span"),e._uU(1," Send reset link "),e.qZA())}function T(t,l){1&t&&e._UZ(0,"mat-progress-spinner",37),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const U=()=>["/sign-in"],b=[{path:"",component:(()=>{class t{constructor(s,i){this._authService=s,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[r.kI.required,r.kI.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,v.x)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},s=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(x.e),e.Y36(r.QS))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["auth-forgot-password"]],viewQuery:function(i,a){if(1&i&&e.Gf(y,5),2&i){let m;e.iGM(m=e.CRH())&&(a.forgotPasswordNgForm=m.first)}},standalone:!0,features:[e.jDz],decls:52,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Forgot password?"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Fill the form to reset your password"),e.qZA(),e.YNc(9,Z,2,5,"fuse-alert",7),e.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e._uU(14,"Email address"),e.qZA(),e._UZ(15,"input",11),e.YNc(16,A,2,0,"mat-error",12)(17,F,2,0,"mat-error",12),e.qZA(),e.TgZ(18,"button",13),e.NdJ("click",function(){return a.sendResetLink()}),e.YNc(19,P,2,0,"span",12)(20,T,1,2,"mat-progress-spinner",14),e.qZA(),e.TgZ(21,"div",15)(22,"span"),e._uU(23,"Return to"),e.qZA(),e.TgZ(24,"a",16),e._uU(25,"sign in "),e.qZA()()()()(),e.TgZ(26,"div",17),e.O4$(),e.TgZ(27,"svg",18)(28,"g",19),e._UZ(29,"circle",20)(30,"circle",21),e.qZA()(),e.TgZ(31,"svg",22)(32,"defs")(33,"pattern",23),e._UZ(34,"rect",24),e.qZA()(),e._UZ(35,"rect",25),e.qZA(),e.kcU(),e.TgZ(36,"div",26)(37,"div",27)(38,"div"),e._uU(39,"Welcome to"),e.qZA(),e.TgZ(40,"div"),e._uU(41,"our community"),e.qZA()(),e.TgZ(42,"div",28),e._uU(43," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(44,"div",29)(45,"div",30),e._UZ(46,"img",31)(47,"img",32)(48,"img",33)(49,"img",34),e.qZA(),e.TgZ(50,"div",35),e._uU(51,"More than 17k people joined us, it's your turn"),e.qZA()()()()()),2&i&&(e.xp6(9),e.Q6J("ngIf",a.showAlert),e.xp6(1),e.Q6J("formGroup",a.forgotPasswordForm),e.xp6(5),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",a.forgotPasswordForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",a.forgotPasswordForm.get("email").hasError("email")),e.xp6(1),e.Q6J("color","primary")("disabled",a.forgotPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",!a.forgotPasswordForm.disabled),e.xp6(1),e.Q6J("ngIf",a.forgotPasswordForm.disabled),e.xp6(4),e.Q6J("routerLink",e.DdM(10,U)))},dependencies:[c.O5,w.W,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.sg,r.u,n.lN,n.KE,n.hX,n.TO,f.c,f.Nt,g.ot,g.lW,u.Cq,u.Ou,p.rH],encapsulation:2,data:{animation:h.L}})}return t})()}]}}]);