! function() {
    var $ = window.jQuery,
        opts = window.top && window.top.OPTS || {
            ajaxurl: "/blog/wp-admin/admin-ajax.php",
            base_color: {
                flat: "#c0392b",
                cube: "#c0392b",
                minimalistic: "#0f9267"
            },
            flat_socialbar: "top",
            humantest: "",
            sidebar_pos: "left",
            sidebar_type: "push",
            social: {
                ncf_facebook: "https://www.facebook.com/",
                ncf_gplus: "https://www.facebook.com/",
                ncf_linkedin: "https://www.facebook.com/",
                ncf_pinterest: "https://www.facebook.com/",
                ncf_twitter: "https://www.facebook.com/",
                ncf_vimeo: "https://www.facebook.com/",
                ncf_youtube: "https://www.facebook.com/",
                ncf_dribbble: "https://www.facebook.com/"
            },
            theme: "flat",
            bg: "",
            label: "circle",
            label_vis: "visible",
            fade_content: "none",
            sending_text: "Sending",
            success: "Your message was successfully sent!"
        };
    console.log(opts);
    console.log('entrou');
    var html = {}
    html.flat = '<div id="ncf_sidebar" class="ncf_flat ncf_up_style_theme_custom"><div class="ncf_sidebar_cont_scrollable">';
        html.flat += '<div class="ncf_sidebar_cont ncf_shrinked" style="min-height: 0px;">';
            html.flat += '<div class="ncf_form_wrapper ncf_form_1 ncf_default_form" data-index="1" style="display: block;">';
                html.flat += '<div class="ncf_sidebar_header"> <div class="ncf_sidebar_socialbar"><ul>';
                    html.flat += '<li class="ncf_color1"><a class="ncf_facebook" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color2"><a class="ncf_twitter" href="https://facebook.com" target="_blank"></a></li>' ;
                    html.flat += '<li class="ncf_color3"><a class="ncf_pinterest" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color4"><a class="ncf_youtube" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color5"><a class="ncf_instagram" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color6"><a class="ncf_linkedin" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color7"><a class="ncf_gplus" href="https://facebook.com" target="_blank"></a></li>';
                    html.flat += '<li class="ncf_color8"><a class="ncf_rss" href="https://facebook.com" target="_blank"></a></li>';
                html.flat += '</ul></div>';
                html.flat += '<div class="ncf_sidebar_header_userinfo ncf_color1">';
                html.flat += '<div class="ncf_userpic"><img src="https://media.licdn.com/media/p/7/000/2bf/301/1282acc.jpg" alt=""></div> <div class="ncf_user_credentials"> <span class="ncf_user_firstname"></span> <span class="ncf_user_lastname">Fábio Souza</span> <span class="ncf_user_title">Donec vel leo non leo cursus finibus id a sem.</span> </div> </div>  </div> <div class="ncf_sidebar_content"> <div class="ncf_user_bio">Duis consectetur lacus sed scelerisque fringilla</div> <form class="ncf_form" action="" id="nk_form_1"> <input type="hidden" name="action" value="ncf_send_message"> <input type="hidden" name="ncf_form_index" value="1"> <div class="ncf_form_input_wrapper ncf_name_field ncf_ph"> <input type="text" name="ncf_name_field" id="ncf_name_field" data-rules="required|min[2]|max[32]" data-name="Seu nome"><label for="ncf_name_field">Seu nome *</label> </div> <div class="ncf_form_input_wrapper ncf_email_field ncf_ph"> <input type="email" name="ncf_email_field" id="ncf_email_field" data-rules="required|email" data-name="Seu email"><label for="ncf_email_field">Seu email *</label> </div> <div class="ncf_form_input_wrapper ncf_message_field ncf_ph"> <textarea name="ncf_message_field" id="ncf_message_field" cols="30" rows="10" data-rules="required" data-name="Sua mensagem"></textarea><label for="ncf_message_field">Sua mensagem *</label> <div class="ncf_form_btn_wrapper"> <div class="ncf_question_wrapper ncf_ph"><input type="text" name="ncf_answer_field" id="ncf_answer_field" maxlength="2" data-rules="required|numeric|answer[14]" data-name="Answer"><label id="ncf_question" for="ncf_answer_field">8 + 6 = ?</label> </div> <a class="ncf_button ncf_color1" href="#"><span>Send</span></a> <input type="submit" value="Send"> </div> </form> <div class="ncf_form_result"></div> </div> </div> </div> </div> </div>';
        html = html[opts.theme], 
        $("body").prepend(html).addClass("ncf_theme_" + opts.theme), "right" === opts.sidebar_pos && $(".direction").html("right"), "flat" !== opts.theme && $(".nks_cc_trigger_tabs").addClass("ncf_hover"),
        // $(".nks_cc_trigger_tabs").addClass("ncf_hover");
        function(a) {
            if (!a.transitionEnd) {
                var e = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "otransitionend"
                    },
                    n = document.createElement("div");
                for (var t in e)
                    if ("undefined" != typeof n.style[t]) {
                        a.transitionEnd = e[t];
                        break
                    }
                a.transitionEnd || (a.transitionEnd = !1)
            }
        }(window), NKS_DEBUG = 0, jQuery(document).one("ncf_ready", function($) {
            if (!/MSIE 8/.test(navigator.userAgent)) {
                var $ = jQuery;
                eval(function(a, e, n, t, i, s) {
                    if (i = function(a) {
                            return (e > a ? "" : i(parseInt(a / e))) + ((a %= e) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
                        }, !"".replace(/^/, String)) {
                        for (; n--;) s[i(n)] = t[n] || i(n);
                        t = [function(a) {
                            return s[a]
                        }], i = function() {
                            return "\\w+"
                        }, n = 1
                    }
                    for (; n--;) t[n] && (a = a.replace(new RegExp("\\b" + i(n) + "\\b", "g"), t[n]));
                    return a
                }("9 17={3i:'0.1.3',16:1e-6};l v(){}v.23={e:l(i){8(i<1||i>7.4.q)?w:7.4[i-1]},2R:l(){8 7.4.q},1u:l(){8 F.1x(7.2u(7))},24:l(a){9 n=7.4.q;9 V=a.4||a;o(n!=V.q){8 1L}J{o(F.13(7.4[n-1]-V[n-1])>17.16){8 1L}}H(--n);8 2x},1q:l(){8 v.u(7.4)},1b:l(a){9 b=[];7.28(l(x,i){b.19(a(x,i))});8 v.u(b)},28:l(a){9 n=7.4.q,k=n,i;J{i=k-n;a(7.4[i],i+1)}H(--n)},2q:l(){9 r=7.1u();o(r===0){8 7.1q()}8 7.1b(l(x){8 x/r})},1C:l(a){9 V=a.4||a;9 n=7.4.q,k=n,i;o(n!=V.q){8 w}9 b=0,1D=0,1F=0;7.28(l(x,i){b+=x*V[i-1];1D+=x*x;1F+=V[i-1]*V[i-1]});1D=F.1x(1D);1F=F.1x(1F);o(1D*1F===0){8 w}9 c=b/(1D*1F);o(c<-1){c=-1}o(c>1){c=1}8 F.37(c)},1m:l(a){9 b=7.1C(a);8(b===w)?w:(b<=17.16)},34:l(a){9 b=7.1C(a);8(b===w)?w:(F.13(b-F.1A)<=17.16)},2k:l(a){9 b=7.2u(a);8(b===w)?w:(F.13(b)<=17.16)},2j:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x+V[i-1]})},2C:l(a){9 V=a.4||a;o(7.4.q!=V.q){8 w}8 7.1b(l(x,i){8 x-V[i-1]})},22:l(k){8 7.1b(l(x){8 x*k})},x:l(k){8 7.22(k)},2u:l(a){9 V=a.4||a;9 i,2g=0,n=7.4.q;o(n!=V.q){8 w}J{2g+=7.4[n-1]*V[n-1]}H(--n);8 2g},2f:l(a){9 B=a.4||a;o(7.4.q!=3||B.q!=3){8 w}9 A=7.4;8 v.u([(A[1]*B[2])-(A[2]*B[1]),(A[2]*B[0])-(A[0]*B[2]),(A[0]*B[1])-(A[1]*B[0])])},2A:l(){9 m=0,n=7.4.q,k=n,i;J{i=k-n;o(F.13(7.4[i])>F.13(m)){m=7.4[i]}}H(--n);8 m},2Z:l(x){9 a=w,n=7.4.q,k=n,i;J{i=k-n;o(a===w&&7.4[i]==x){a=i+1}}H(--n);8 a},3g:l(){8 S.2X(7.4)},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(y){8(F.13(y-x)<=17.16)?x:y})},1o:l(a){o(a.K){8 a.1o(7)}9 V=a.4||a;o(V.q!=7.4.q){8 w}9 b=0,2b;7.28(l(x,i){2b=x-V[i-1];b+=2b*2b});8 F.1x(b)},3a:l(a){8 a.1h(7)},2T:l(a){8 a.1h(7)},1V:l(t,a){9 V,R,x,y,z;2S(7.4.q){27 2:V=a.4||a;o(V.q!=2){8 w}R=S.1R(t).4;x=7.4[0]-V[0];y=7.4[1]-V[1];8 v.u([V[0]+R[0][0]*x+R[0][1]*y,V[1]+R[1][0]*x+R[1][1]*y]);1I;27 3:o(!a.U){8 w}9 C=a.1r(7).4;R=S.1R(t,a.U).4;x=7.4[0]-C[0];y=7.4[1]-C[1];z=7.4[2]-C[2];8 v.u([C[0]+R[0][0]*x+R[0][1]*y+R[0][2]*z,C[1]+R[1][0]*x+R[1][1]*y+R[1][2]*z,C[2]+R[2][0]*x+R[2][1]*y+R[2][2]*z]);1I;2P:8 w}},1t:l(a){o(a.K){9 P=7.4.2O();9 C=a.1r(P).4;8 v.u([C[0]+(C[0]-P[0]),C[1]+(C[1]-P[1]),C[2]+(C[2]-(P[2]||0))])}1d{9 Q=a.4||a;o(7.4.q!=Q.q){8 w}8 7.1b(l(x,i){8 Q[i-1]+(Q[i-1]-x)})}},1N:l(){9 V=7.1q();2S(V.4.q){27 3:1I;27 2:V.4.19(0);1I;2P:8 w}8 V},2n:l(){8'['+7.4.2K(', ')+']'},26:l(a){7.4=(a.4||a).2O();8 7}};v.u=l(a){9 V=25 v();8 V.26(a)};v.i=v.u([1,0,0]);v.j=v.u([0,1,0]);v.k=v.u([0,0,1]);v.2J=l(n){9 a=[];J{a.19(F.2F())}H(--n);8 v.u(a)};v.1j=l(n){9 a=[];J{a.19(0)}H(--n);8 v.u(a)};l S(){}S.23={e:l(i,j){o(i<1||i>7.4.q||j<1||j>7.4[0].q){8 w}8 7.4[i-1][j-1]},33:l(i){o(i>7.4.q){8 w}8 v.u(7.4[i-1])},2E:l(j){o(j>7.4[0].q){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][j-1])}H(--n);8 v.u(a)},2R:l(){8{2D:7.4.q,1p:7.4[0].q}},2D:l(){8 7.4.q},1p:l(){8 7.4[0].q},24:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(7.4.q!=M.q||7.4[0].q!=M[0].q){8 1L}9 b=7.4.q,15=b,i,G,10=7.4[0].q,j;J{i=15-b;G=10;J{j=10-G;o(F.13(7.4[i][j]-M[i][j])>17.16){8 1L}}H(--G)}H(--b);8 2x},1q:l(){8 S.u(7.4)},1b:l(a){9 b=[],12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;b[i]=[];J{j=10-G;b[i][j]=a(7.4[i][j],i+1,j+1)}H(--G)}H(--12);8 S.u(b)},2i:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4.q==M.q&&7.4[0].q==M[0].q)},2j:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x+M[i-1][j-1]})},2C:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2i(M)){8 w}8 7.1b(l(x,i,j){8 x-M[i-1][j-1]})},2B:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}8(7.4[0].q==M.q)},22:l(a){o(!a.4){8 7.1b(l(x){8 x*a})}9 b=a.1u?2x:1L;9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}o(!7.2B(M)){8 w}9 d=7.4.q,15=d,i,G,10=M[0].q,j;9 e=7.4[0].q,4=[],21,20,c;J{i=15-d;4[i]=[];G=10;J{j=10-G;21=0;20=e;J{c=e-20;21+=7.4[i][c]*M[c][j]}H(--20);4[i][j]=21}H(--G)}H(--d);9 M=S.u(4);8 b?M.2E(1):M},x:l(a){8 7.22(a)},32:l(a,b,c,d){9 e=[],12=c,i,G,j;9 f=7.4.q,1p=7.4[0].q;J{i=c-12;e[i]=[];G=d;J{j=d-G;e[i][j]=7.4[(a+i-1)%f][(b+j-1)%1p]}H(--G)}H(--12);8 S.u(e)},31:l(){9 a=7.4.q,1p=7.4[0].q;9 b=[],12=1p,i,G,j;J{i=1p-12;b[i]=[];G=a;J{j=a-G;b[i][j]=7.4[j][i]}H(--G)}H(--12);8 S.u(b)},1y:l(){8(7.4.q==7.4[0].q)},2A:l(){9 m=0,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(F.13(7.4[i][j])>F.13(m)){m=7.4[i][j]}}H(--G)}H(--12);8 m},2Z:l(x){9 a=w,12=7.4.q,15=12,i,G,10=7.4[0].q,j;J{i=15-12;G=10;J{j=10-G;o(7.4[i][j]==x){8{i:i+1,j:j+1}}}H(--G)}H(--12);8 w},30:l(){o(!7.1y){8 w}9 a=[],n=7.4.q,k=n,i;J{i=k-n;a.19(7.4[i][i])}H(--n);8 v.u(a)},1K:l(){9 M=7.1q(),1c;9 n=7.4.q,k=n,i,1s,1n=7.4[0].q,p;J{i=k-n;o(M.4[i][i]==0){2e(j=i+1;j<k;j++){o(M.4[j][i]!=0){1c=[];1s=1n;J{p=1n-1s;1c.19(M.4[i][p]+M.4[j][p])}H(--1s);M.4[i]=1c;1I}}}o(M.4[i][i]!=0){2e(j=i+1;j<k;j++){9 a=M.4[j][i]/M.4[i][i];1c=[];1s=1n;J{p=1n-1s;1c.19(p<=i?0:M.4[j][p]-M.4[i][p]*a)}H(--1s);M.4[j]=1c}}}H(--n);8 M},3h:l(){8 7.1K()},2z:l(){o(!7.1y()){8 w}9 M=7.1K();9 a=M.4[0][0],n=M.4.q-1,k=n,i;J{i=k-n+1;a=a*M.4[i][i]}H(--n);8 a},3f:l(){8 7.2z()},2y:l(){8(7.1y()&&7.2z()===0)},2Y:l(){o(!7.1y()){8 w}9 a=7.4[0][0],n=7.4.q-1,k=n,i;J{i=k-n+1;a+=7.4[i][i]}H(--n);8 a},3e:l(){8 7.2Y()},1Y:l(){9 M=7.1K(),1Y=0;9 a=7.4.q,15=a,i,G,10=7.4[0].q,j;J{i=15-a;G=10;J{j=10-G;o(F.13(M.4[i][j])>17.16){1Y++;1I}}H(--G)}H(--a);8 1Y},3d:l(){8 7.1Y()},2W:l(a){9 M=a.4||a;o(1g(M[0][0])=='1f'){M=S.u(M).4}9 T=7.1q(),1p=T.4[0].q;9 b=T.4.q,15=b,i,G,10=M[0].q,j;o(b!=M.q){8 w}J{i=15-b;G=10;J{j=10-G;T.4[i][1p+j]=M[i][j]}H(--G)}H(--b);8 T},2w:l(){o(!7.1y()||7.2y()){8 w}9 a=7.4.q,15=a,i,j;9 M=7.2W(S.I(a)).1K();9 b,1n=M.4[0].q,p,1c,2v;9 c=[],2c;J{i=a-1;1c=[];b=1n;c[i]=[];2v=M.4[i][i];J{p=1n-b;2c=M.4[i][p]/2v;1c.19(2c);o(p>=15){c[i].19(2c)}}H(--b);M.4[i]=1c;2e(j=0;j<i;j++){1c=[];b=1n;J{p=1n-b;1c.19(M.4[j][p]-M.4[i][p]*M.4[j][i])}H(--b);M.4[j]=1c}}H(--a);8 S.u(c)},3c:l(){8 7.2w()},2d:l(){8 7.1b(l(x){8 F.2d(x)})},2V:l(x){8 7.1b(l(p){8(F.13(p-x)<=17.16)?x:p})},2n:l(){9 a=[];9 n=7.4.q,k=n,i;J{i=k-n;a.19(v.u(7.4[i]).2n())}H(--n);8 a.2K('\\n')},26:l(a){9 i,4=a.4||a;o(1g(4[0][0])!='1f'){9 b=4.q,15=b,G,10,j;7.4=[];J{i=15-b;G=4[i].q;10=G;7.4[i]=[];J{j=10-G;7.4[i][j]=4[i][j]}H(--G)}H(--b);8 7}9 n=4.q,k=n;7.4=[];J{i=k-n;7.4.19([4[i]])}H(--n);8 7}};S.u=l(a){9 M=25 S();8 M.26(a)};S.I=l(n){9 a=[],k=n,i,G,j;J{i=k-n;a[i]=[];G=k;J{j=k-G;a[i][j]=(i==j)?1:0}H(--G)}H(--n);8 S.u(a)};S.2X=l(a){9 n=a.q,k=n,i;9 M=S.I(n);J{i=k-n;M.4[i][i]=a[i]}H(--n);8 M};S.1R=l(b,a){o(!a){8 S.u([[F.1H(b),-F.1G(b)],[F.1G(b),F.1H(b)]])}9 d=a.1q();o(d.4.q!=3){8 w}9 e=d.1u();9 x=d.4[0]/e,y=d.4[1]/e,z=d.4[2]/e;9 s=F.1G(b),c=F.1H(b),t=1-c;8 S.u([[t*x*x+c,t*x*y-s*z,t*x*z+s*y],[t*x*y+s*z,t*y*y+c,t*y*z-s*x],[t*x*z-s*y,t*y*z+s*x,t*z*z+c]])};S.3b=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[1,0,0],[0,c,-s],[0,s,c]])};S.39=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,0,s],[0,1,0],[-s,0,c]])};S.38=l(t){9 c=F.1H(t),s=F.1G(t);8 S.u([[c,-s,0],[s,c,0],[0,0,1]])};S.2J=l(n,m){8 S.1j(n,m).1b(l(){8 F.2F()})};S.1j=l(n,m){9 a=[],12=n,i,G,j;J{i=n-12;a[i]=[];G=m;J{j=m-G;a[i][j]=0}H(--G)}H(--12);8 S.u(a)};l 14(){}14.23={24:l(a){8(7.1m(a)&&7.1h(a.K))},1q:l(){8 14.u(7.K,7.U)},2U:l(a){9 V=a.4||a;8 14.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.U)},1m:l(a){o(a.W){8 a.1m(7)}9 b=7.U.1C(a.U);8(F.13(b)<=17.16||F.13(b-F.1A)<=17.16)},1o:l(a){o(a.W){8 a.1o(7)}o(a.U){o(7.1m(a)){8 7.1o(a.K)}9 N=7.U.2f(a.U).2q().4;9 A=7.K.4,B=a.K.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,D=7.U.4;9 b=P[0]-A[0],2a=P[1]-A[1],29=(P[2]||0)-A[2];9 c=F.1x(b*b+2a*2a+29*29);o(c===0)8 0;9 d=(b*D[0]+2a*D[1]+29*D[2])/c;9 e=1-d*d;8 F.13(c*F.1x(e<0?0:e))}},1h:l(a){9 b=7.1o(a);8(b!==w&&b<=17.16)},2T:l(a){8 a.1h(7)},1v:l(a){o(a.W){8 a.1v(7)}8(!7.1m(a)&&7.1o(a)<=17.16)},1U:l(a){o(a.W){8 a.1U(7)}o(!7.1v(a)){8 w}9 P=7.K.4,X=7.U.4,Q=a.K.4,Y=a.U.4;9 b=X[0],1z=X[1],1B=X[2],1T=Y[0],1S=Y[1],1M=Y[2];9 c=P[0]-Q[0],2s=P[1]-Q[1],2r=P[2]-Q[2];9 d=-b*c-1z*2s-1B*2r;9 e=1T*c+1S*2s+1M*2r;9 f=b*b+1z*1z+1B*1B;9 g=1T*1T+1S*1S+1M*1M;9 h=b*1T+1z*1S+1B*1M;9 k=(d*g/f+h*e)/(g-h*h);8 v.u([P[0]+k*b,P[1]+k*1z,P[2]+k*1B])},1r:l(a){o(a.U){o(7.1v(a)){8 7.1U(a)}o(7.1m(a)){8 w}9 D=7.U.4,E=a.U.4;9 b=D[0],1l=D[1],1k=D[2],1P=E[0],1O=E[1],1Q=E[2];9 x=(1k*1P-b*1Q),y=(b*1O-1l*1P),z=(1l*1Q-1k*1O);9 N=v.u([x*1Q-y*1O,y*1P-z*1Q,z*1O-x*1P]);9 P=11.u(a.K,N);8 P.1U(7)}1d{9 P=a.4||a;o(7.1h(P)){8 v.u(P)}9 A=7.K.4,D=7.U.4;9 b=D[0],1l=D[1],1k=D[2],1w=A[0],18=A[1],1a=A[2];9 x=b*(P[1]-18)-1l*(P[0]-1w),y=1l*((P[2]||0)-1a)-1k*(P[1]-18),z=1k*(P[0]-1w)-b*((P[2]||0)-1a);9 V=v.u([1l*x-1k*z,1k*y-b*x,b*z-1l*y]);9 k=7.1o(P)/V.1u();8 v.u([P[0]+V.4[0]*k,P[1]+V.4[1]*k,(P[2]||0)+V.4[2]*k])}},1V:l(t,a){o(1g(a.U)=='1f'){a=14.u(a.1N(),v.k)}9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,D=7.U.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 14.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*D[0]+R[0][1]*D[1]+R[0][2]*D[2],R[1][0]*D[0]+R[1][1]*D[1]+R[1][2]*D[2],R[2][0]*D[0]+R[2][1]*D[1]+R[2][2]*D[2]])},1t:l(a){o(a.W){9 A=7.K.4,D=7.U.4;9 b=A[0],18=A[1],1a=A[2],2N=D[0],1l=D[1],1k=D[2];9 c=7.K.1t(a).4;9 d=b+2N,2h=18+1l,2o=1a+1k;9 Q=a.1r([d,2h,2o]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2h)-c[1],Q[2]+(Q[2]-2o)-c[2]];8 14.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 14.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.U)}},1Z:l(a,b){a=v.u(a);b=v.u(b);o(a.4.q==2){a.4.19(0)}o(b.4.q==2){b.4.19(0)}o(a.4.q>3||b.4.q>3){8 w}9 c=b.1u();o(c===0){8 w}7.K=a;7.U=v.u([b.4[0]/c,b.4[1]/c,b.4[2]/c]);8 7}};14.u=l(a,b){9 L=25 14();8 L.1Z(a,b)};14.X=14.u(v.1j(3),v.i);14.Y=14.u(v.1j(3),v.j);14.Z=14.u(v.1j(3),v.k);l 11(){}11.23={24:l(a){8(7.1h(a.K)&&7.1m(a))},1q:l(){8 11.u(7.K,7.W)},2U:l(a){9 V=a.4||a;8 11.u([7.K.4[0]+V[0],7.K.4[1]+V[1],7.K.4[2]+(V[2]||0)],7.W)},1m:l(a){9 b;o(a.W){b=7.W.1C(a.W);8(F.13(b)<=17.16||F.13(F.1A-b)<=17.16)}1d o(a.U){8 7.W.2k(a.U)}8 w},2k:l(a){9 b=7.W.1C(a.W);8(F.13(F.1A/2-b)<=17.16)},1o:l(a){o(7.1v(a)||7.1h(a)){8 0}o(a.K){9 A=7.K.4,B=a.K.4,N=7.W.4;8 F.13((A[0]-B[0])*N[0]+(A[1]-B[1])*N[1]+(A[2]-B[2])*N[2])}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;8 F.13((A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2])}},1h:l(a){o(a.W){8 w}o(a.U){8(7.1h(a.K)&&7.1h(a.K.2j(a.U)))}1d{9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=F.13(N[0]*(A[0]-P[0])+N[1]*(A[1]-P[1])+N[2]*(A[2]-(P[2]||0)));8(b<=17.16)}},1v:l(a){o(1g(a.U)=='1f'&&1g(a.W)=='1f'){8 w}8!7.1m(a)},1U:l(a){o(!7.1v(a)){8 w}o(a.U){9 A=a.K.4,D=a.U.4,P=7.K.4,N=7.W.4;9 b=(N[0]*(P[0]-A[0])+N[1]*(P[1]-A[1])+N[2]*(P[2]-A[2]))/(N[0]*D[0]+N[1]*D[1]+N[2]*D[2]);8 v.u([A[0]+D[0]*b,A[1]+D[1]*b,A[2]+D[2]*b])}1d o(a.W){9 c=7.W.2f(a.W).2q();9 N=7.W.4,A=7.K.4,O=a.W.4,B=a.K.4;9 d=S.1j(2,2),i=0;H(d.2y()){i++;d=S.u([[N[i%3],N[(i+1)%3]],[O[i%3],O[(i+1)%3]]])}9 e=d.2w().4;9 x=N[0]*A[0]+N[1]*A[1]+N[2]*A[2];9 y=O[0]*B[0]+O[1]*B[1]+O[2]*B[2];9 f=[e[0][0]*x+e[0][1]*y,e[1][0]*x+e[1][1]*y];9 g=[];2e(9 j=1;j<=3;j++){g.19((i==j)?0:f[(j+(5-i)%3)%3])}8 14.u(g,c)}},1r:l(a){9 P=a.4||a;9 A=7.K.4,N=7.W.4;9 b=(A[0]-P[0])*N[0]+(A[1]-P[1])*N[1]+(A[2]-(P[2]||0))*N[2];8 v.u([P[0]+N[0]*b,P[1]+N[1]*b,(P[2]||0)+N[2]*b])},1V:l(t,a){9 R=S.1R(t,a.U).4;9 C=a.1r(7.K).4;9 A=7.K.4,N=7.W.4;9 b=C[0],1E=C[1],1J=C[2],1w=A[0],18=A[1],1a=A[2];9 x=1w-b,y=18-1E,z=1a-1J;8 11.u([b+R[0][0]*x+R[0][1]*y+R[0][2]*z,1E+R[1][0]*x+R[1][1]*y+R[1][2]*z,1J+R[2][0]*x+R[2][1]*y+R[2][2]*z],[R[0][0]*N[0]+R[0][1]*N[1]+R[0][2]*N[2],R[1][0]*N[0]+R[1][1]*N[1]+R[1][2]*N[2],R[2][0]*N[0]+R[2][1]*N[1]+R[2][2]*N[2]])},1t:l(a){o(a.W){9 A=7.K.4,N=7.W.4;9 b=A[0],18=A[1],1a=A[2],2M=N[0],2L=N[1],2Q=N[2];9 c=7.K.1t(a).4;9 d=b+2M,2p=18+2L,2m=1a+2Q;9 Q=a.1r([d,2p,2m]).4;9 e=[Q[0]+(Q[0]-d)-c[0],Q[1]+(Q[1]-2p)-c[1],Q[2]+(Q[2]-2m)-c[2]];8 11.u(c,e)}1d o(a.U){8 7.1V(F.1A,a)}1d{9 P=a.4||a;8 11.u(7.K.1t([P[0],P[1],(P[2]||0)]),7.W)}},1Z:l(a,b,c){a=v.u(a);a=a.1N();o(a===w){8 w}b=v.u(b);b=b.1N();o(b===w){8 w}o(1g(c)=='1f'){c=w}1d{c=v.u(c);c=c.1N();o(c===w){8 w}}9 d=a.4[0],18=a.4[1],1a=a.4[2];9 e=b.4[0],1W=b.4[1],1X=b.4[2];9 f,1i;o(c!==w){9 g=c.4[0],2l=c.4[1],2t=c.4[2];f=v.u([(1W-18)*(2t-1a)-(1X-1a)*(2l-18),(1X-1a)*(g-d)-(e-d)*(2t-1a),(e-d)*(2l-18)-(1W-18)*(g-d)]);1i=f.1u();o(1i===0){8 w}f=v.u([f.4[0]/1i,f.4[1]/1i,f.4[2]/1i])}1d{1i=F.1x(e*e+1W*1W+1X*1X);o(1i===0){8 w}f=v.u([b.4[0]/1i,b.4[1]/1i,b.4[2]/1i])}7.K=a;7.W=f;8 7}};11.u=l(a,b,c){9 P=25 11();8 P.1Z(a,b,c)};11.2I=11.u(v.1j(3),v.k);11.2H=11.u(v.1j(3),v.i);11.2G=11.u(v.1j(3),v.j);11.36=11.2I;11.35=11.2H;11.3j=11.2G;9 $V=v.u;9 $M=S.u;9 $L=14.u;9 $P=11.u;", 62, 206, "||||elements|||this|return|var||||||||||||function|||if||length||||create|Vector|null|||||||||Math|nj|while||do|anchor||||||||Matrix||direction||normal||||kj|Plane|ni|abs|Line|ki|precision|Sylvester|A2|push|A3|map|els|else||undefined|typeof|contains|mod|Zero|D3|D2|isParallelTo|kp|distanceFrom|cols|dup|pointClosestTo|np|reflectionIn|modulus|intersects|A1|sqrt|isSquare|X2|PI|X3|angleFrom|mod1|C2|mod2|sin|cos|break|C3|toRightTriangular|false|Y3|to3D|E2|E1|E3|Rotation|Y2|Y1|intersectionWith|rotate|v12|v13|rank|setVectors|nc|sum|multiply|prototype|eql|new|setElements|case|each|PA3|PA2|part|new_element|round|for|cross|product|AD2|isSameSizeAs|add|isPerpendicularTo|v22|AN3|inspect|AD3|AN2|toUnitVector|PsubQ3|PsubQ2|v23|dot|divisor|inverse|true|isSingular|determinant|max|canMultiplyFromLeft|subtract|rows|col|random|ZX|YZ|XY|Random|join|N2|N1|D1|slice|default|N3|dimensions|switch|liesIn|translate|snapTo|augment|Diagonal|trace|indexOf|diagonal|transpose|minor|row|isAntiparallelTo|ZY|YX|acos|RotationZ|RotationY|liesOn|RotationX|inv|rk|tr|det|toDiagonalMatrix|toUpperTriangular|version|XZ".split("|"), 0, {}));
                var _T = {
                    rotate: function(a) {
                        var e = parseFloat(a) * (Math.PI / 180),
                            n = Math.cos(e),
                            t = Math.sin(e),
                            i = n,
                            s = t,
                            r = -t,
                            o = n;
                        return $M([
                            [i, r, 0],
                            [s, o, 0],
                            [0, 0, 1]
                        ])
                    },
                    skew: function(a, e) {
                        var n = parseFloat(a) * (Math.PI / 180),
                            t = parseFloat(e) * (Math.PI / 180),
                            i = Math.tan(n),
                            s = Math.tan(t);
                        return $M([
                            [1, i, 0],
                            [s, 1, 0],
                            [0, 0, 1]
                        ])
                    },
                    translate: function(a, e) {
                        var n = a || 0,
                            t = e || 0;
                        return $M([
                            [1, 0, n],
                            [0, 1, t],
                            [0, 0, 1]
                        ])
                    },
                    scale: function(a, e) {
                        var n = a || 0,
                            t = e || 0;
                        return $M([
                            [n, 0, 0],
                            [0, t, 0],
                            [0, 0, 1]
                        ])
                    },
                    toString: function(a) {
                        var e, n, t = "matrix(";
                        for (n = 1; 3 >= n; n++)
                            for (e = 1; 2 >= e; e++) t += a.e(e, n) + ", ";
                        return t = t.substr(0, t.length - 2) + ")"
                    },
                    fromString: function(a) {
                        var e = /^matrix\((\S*), (\S*), (\S*), (\S*), (\S*), (\S*)\)$/g.exec(a),
                            n = parseFloat(e ? e[1] : 1),
                            t = parseFloat(e ? e[2] : 0),
                            i = parseFloat(e ? e[3] : 0),
                            s = parseFloat(e ? e[4] : 1),
                            r = parseFloat(e ? e[5] : 0),
                            o = parseFloat(e ? e[6] : 0);
                        return $M([
                            [n, i, r],
                            [t, s, o],
                            [0, 0, 1]
                        ])
                    }
                };
                ! function(a) {
                    function e(e) {
                        return "checkbox" === e.type ? e.checked : a(e).val()
                    }

                    function n(a, e, n) {
                        var t = r[a];
                        for (n.unshift(e); n.length;) t = t.replace(/%%/, n.shift());
                        return t
                    }
                    var t = {
                            api_fn: function(e) {
                                a(this).jvalidator().valid || e.preventDefault()
                            },
                            api_selector: "[data-validate=true]",
                            error_fn: a.noop,
                            field_attr: "name",
                            fields: "input, textarea, select",
                            regex: {
                                email: /.+@.+/
                            },
                            use_api: !0
                        },
                        i = {
                            4: {
                                split: ".",
                                segments: 4,
                                radix: 10,
                                upper: 255
                            },
                            6: {
                                split: ":",
                                segments: 8,
                                radix: 16,
                                upper: 65535
                            }
                        },
                        s = {
                            required: function() {
                                return this.field === !0 || !!this.field.length
                            },
                            min: function(a) {
                                return this.field.length >= +a
                            },
                            max: function(a) {
                                return this.field.length <= +a
                            },
                            matches: function(a) {
                                return this.form[a] === this.field
                            },
                            less: function(a) {
                                return +this.field < +a
                            },
                            greater: function(a) {
                                return +this.field > +a
                            },
                            numeric: function() {
                                return !isNaN(+this.field)
                            },
                            email: function() {
                                return this.field.match(this.opts.regex.email)
                            },
                            answer: function(a) {
                                return +this.field == +a
                            },
                            ip: function(a) {
                                var e, n = i[a ? a : "4"],
                                    t = this.field.split(n.split),
                                    s = 0;
                                if (!n || t.length != n.segments) return !1;
                                for (; s < n.segments; s++)
                                    if (e = parseInt(t[s], n.radix), 0 > e || e > n.upper) return !1;
                                return !0
                            }
                        },
                        r = window.NinjaContactFormOpts ? window.NinjaContactFormOpts.errors : {
                            required: "* Please enter %%",
                            min: "* %% must have at least %% characters.",
                            max: "* %% can have at most %% characters.",
                            matches: "* %% must match %%.",
                            less: "* %% must be less than %%",
                            greater: "* %% must be greater than %%.",
                            numeric: "* %% must be numeric.",
                            email: "* %% must be a valid email address.",
                            ip: "* %% must be a valid ip address.",
                            answer: "* Wrong %%"
                        };
                    a(function() {
                        t.use_api && a("html").on("submit", t.api_selector, t.api_fn)
                    }), a.fn.jvalidator = function(i) {
                        var r, o = a.extend({}, t, i),
                            l = {},
                            c = {
                                opts: o,
                                form: l
                            },
                            f = [],
                            d = a(o.fields, this);
                        return d.filter("[" + o.field_attr + "]").each(function() {
                            l[this.name] = e(this)
                        }), d.filter("[data-rules]").each(function() {
                            var t, i, l, d = a(this),
                                _ = d.data("rules").split("|"),
                                u = /^(.+)\[(.+)\]$/,
                                p = 0;
                            for (c.obj = d, c.field = e(this); p < _.length; p++)(t = _[p].match(u)) ? (i = t[1], l = t[2].split(",")) : (i = _[p], l = []), s[i].apply(c, l) || (r = n(i, d.data("name") || this[o.field_attr], l), o.error_fn(d, r), f.push(r))
                        }), {
                            valid: !f.length,
                            errors: f,
                            fields: l
                        }
                    }, a.fn.jvalidator.defaults = t, a.fn.jvalidator.errors = r, a.fn.jvalidator.functions = s
                }($), setTimeout(function() {
                    var a = window.console && window.NKS_DEBUG ? window.console : {
                        log: function() {}
                    };
                    a.log("YO");
                    var e = window.NinjaSidebar || function() {
                        function n() {
                            s(opts.social, opts.theme), y.add(".ncf_trigger_element, .ncf-tab-icon").add(opts.togglers).click(function() {
                                return z ? i($(this)) : t($(this)), !1
                            }), x.delegate(".ncf_trigger_element" + (opts.togglers ? "," + opts.togglers : ""), "click", function() {
                                return z ? i($(this)) : t($(this)), !1
                            }), opts.label_mouseover && y.mouseover(function() {
                                z || e.showSidebar($(this))
                            }), q.click(function() {
                                i()
                            });
                            var n = "ncf_hidden ncf_on ncf_sidebar_" + v + " ncf_sidebar_pos_" + V;
                            if (Y && (n += " ncf_msie"), K && (n += " ncf_webkit"), J && (n += " ncf_mobile", w.attr("style", "overflow-x: hidden !important")), U && (n += " ncf_ios"), x.addClass(n), S.find(".wpcf7-form").length && ($(".wpcf7-form-control-wrap").each(function() {
                                    var a, e = $(this),
                                        n = e.find("input:not([type='radio']), input:not([type='checkbox']), textarea"),
                                        t = e.parent().find("> label");
                                    n.length && t.length && (n.attr("id") || t.attr("for") || (a = n.attr("name") + X++, n.attr("id", a), t.attr("for", a)), e.append(t).addClass("ncf_ph"))
                                }), $(".wpcf7-list-item-label").each(function() {
                                    var a = $(this),
                                        e = a.prev("input:first"),
                                        n = a.text(),
                                        t = a.siblings("input:first").attr("name") + X++;
                                    e.attr("id", t), $(this).replaceWith('<label class="wpcf7-list-item-label" for="' + t + '">' + n + "</label> ")
                                }), $(".wpcf7-captchac, .wpcf7-submit").closest("p").addClass("wpcf7-ta-wrap")), S.find("select").each(function() {
                                    $(this).parent().addClass("ncf_select_wrap")
                                }), S.find("a.ncf_button").click(function() {
                                    var a = $(this).closest("form"),
                                        e = a.jvalidator({
                                            error_fn: r
                                        });
                                    return e.valid && a.submit(), !1
                                }), S.find("input").keydown(function(a) {
                                    if (13 == a.which) {
                                        var e = $(this).closest("form"),
                                            n = e.jvalidator({
                                                error_fn: r
                                            });
                                        return n.valid && e.submit(), !1
                                    }
                                }).add(S.find("textarea")).bind("input", function() {
                                    var a = $(this),
                                        e = a.parent(),
                                        n = this.value,
                                        t = e.is(".ncf_has_value"),
                                        i = e.find(".ncf_err_msg:visible");
                                    "" === n ? t && e.removeClass("ncf_has_value") : t || e.addClass("ncf_has_value"), i.length && i.slideUp()
                                }), /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1 && S.find("input, select, textarea").on("focus", function(e) {
                                    return a.log("prevent def"), e.preventDefault(), !1
                                }), setTimeout(function() {
                                    N.find("input, textarea").not(":hidden").val("")
                                }, 0), N.submit(function() {
                                    if (G) return !1;
                                    G = !0;
                                    var e = $(this),
                                        n = (e.closest(".ncf_form_wrapper").attr("data-index"), e.find(".ncf_button").find("span")),
                                        t = n.text();
                                    return n.html(opts.sending_text + "..."),
                                        function i() {
                                            i.cacheOp = 1 === i.cacheOp ? .5 : 1, n.fadeTo(400, i.cacheOp, i)
                                        }(), a.log(e.serialize()), $.ajax({
                                            type: "post",
                                            url: opts.ajaxurl,
                                            data: e.serialize(),
                                            dataType: "json",
                                            success: function() {
                                                G = !1, n.stop().css("opacity", 1).html(t), e.fadeOut(200, function() {
                                                    var a = "flat" === opts.theme ? "ncf_color8" : "ncf_color1";
                                                    F.html('<p class="ncf_form_res_message">' + opts.success + '</p><p class="ncf_btn_wrapper"><a class="ncf_button ncf_btn_more ' + a + '" href="#"><span>' + opts.send_more_text + '</span></a></p><p class="ncf_btn_wrapper"><a class="ncf_button ncf_btn_close ' + a + '" href="#"><span>' + opts.close_text + "</span></a></p>").fadeIn()
                                                })
                                            },
                                            error: function() {
                                                G = !1, n.stop().css("opacity", 1).html(t), e.fadeOut(200, function() {
                                                    var a = "flat" === opts.theme ? "ncf_color8" : "ncf_color1";
                                                    F.html('<p class="ncf_form_res_message">' + opts.msg_fail_text + '</p><p class="ncf_btn_wrapper"><a class="ncf_button ncf_btn_more ' + a + '" href="#">' + opts.try_again_text + '</a></p><p class="ncf_btn_wrapper"><a class="ncf_button ncf_btn_close ' + a + '" href="#">' + opts.close_text + "</a></p>").fadeIn()
                                                })
                                            }
                                        }), !1
                                }), C.delegate("a", "click", function() {
                                    var a = $(this);
                                    return a.is(".ncf_btn_more") ? (F.fadeOut(200, function() {
                                        N.fadeIn(200)
                                    }), !1) : a.is(".ncf_btn_close") ? (i(null, function() {
                                        F.hide(), N.show()
                                    }), !1) : void 0
                                }), opts.humantest && ! function() {
                                    var a = Math.min(Math.ceil(10 * Math.random()), 9),
                                        e = Math.min(Math.ceil(10 * Math.random()), 9);
                                    T = a + e, $("#ncf_question").html(a + " + " + e + " = ?"), $("#ncf_answer_field").attr("data-rules", "required|numeric|answer[" + T + "]")
                                }(), "scroll" === opts.label_vis) g.one("scroll", function() {
                                y.removeClass("ncf_label_scroll")
                            });
                            else if (opts.label_scroll_selector && "visible" !== opts.label_vis) {
                                var o = $(opts.label_scroll_selector).eq(0);
                                g.scroll(function() {
                                    z || (c(o) ? y.removeClass("ncf_label_scroll_into") : y.addClass("ncf_label_scroll_into"))
                                }).scroll()
                            }
                            return "minimalistic" !== opts.theme && "bottom" === opts.flat_socialbar && P.each(function() {
                                $(this).parent().append(P)
                            }), "aerial" === opts.theme && N.find(".ncf_form_input_wrapper :input").focusin(function() {
                                $(this).parent().addClass("ncf_focusin")
                            }).focusout(function() {
                                $(this).parent().removeClass("ncf_focusin")
                            }), g.resize(f), C.css({
                                minHeight: C.height()
                            }), J && d(), window.transitionEnd && ("push" === v ? b : S).bind(window.transitionEnd, function(a) {
                                var e;
                                $(a.target).is("push" === v ? b : S) && (x.is(".ncf_exposed") ? (J && setTimeout(function() {
                                    S.css("-webkit-overflow-scrolling", "touch")
                                }, 100), z = !0) : (x.unbind("mousewheel DOMMouseScroll", u), C.css({
                                    transform: "",
                                    margin: "",
                                    width: ""
                                }).addClass("ncf_shrinked"), x.addClass("ncf_hidden").find(".ncf-active").removeClass("ncf-active"), J && S.css("-webkit-overflow-scrolling", ""), j.css("visibility", "hidden"), z = !1, e = $(".ncf_fixed_inner_el"), Y || "push" !== v || e.each(l), e.removeClass("ncf_fixed_inner_el")), x.removeClass("ncf_transitioning"), W = !1)
                            }), M.mouseenter(function() {
                                M.addClass("nks-hover")
                            }).mouseleave(function() {
                                M.removeClass("nks-hover")
                            }), "push" === v && !opts.isBgFixed, h = S.find(".ncf_default_form"), h.length ? h.length > 1 && h.not(":last").removeClass("ncf_default_form") : S.find(".ncf_form_wrapper:first").addClass("ncf_default_form"), b.before(S), b.add(S).add(y).show(), a.log("gogogo2", y.length), e.init = function() {}, this
                        }

                        function t(e, n) {
                            if (!W && !z) {
                                W = !0;
                                var t, i, s, r, l, c, f = window.innerWidth || g.width(),
                                    d = x.children().not("#ncf_sidebar, [id*=nks], script, style");
                                U && setTimeout(function() {
                                    var e = {};
                                    e[D] = _T.toString(_T.translate(0, window.scrollY)), a.log(window.scrollY), a.log(x.scrollTop()), a.log(g.scrollTop()), A.css(e)
                                }), e && (e.is(".ncf_trigger_element") ? (c = e.attr("class").match(/ncf_toggle_form_(\d+)/), a.log(e.attr("class"), c), c = c ? ".ncf_form_" + c[1] : ".ncf_default_form", i = C.find(c)) : i = C.find(".ncf_default_form"), C.find(".ncf_form_wrapper").hide(), i.show(), A.scrollTop(0)), M.mouseleave(), A.bind("mousewheel DOMMouseScroll", _), $.fn.layerSlider && $("div[id*=layerslider]").layerSlider("stop"), H + 40 > f && ("push" === v ? (t = _T.translate("left" === V ? f - 60 : 60 - f, 0), d.each(function() {
                                    var a, e = $(this),
                                        n = e.css(D);
                                    "none" !== n ? (e.data("ncf-old-matrix", n), n = _T.fromString(n), a = n.x(t), l = {}, l[D] = _T.toString(a), e.css(l).data("ncf-transformed", 1)) : (l = {}, l[D] = _T.toString(t), e.css(l).data("ncf-transformed", 1))
                                })) : (S.add(A).width(f - 60), l = {}, l[D] = _T.toString(_T.translate("left" === V ? f - 65 : 65 - f, 0)), k.css(l).data("ncf-adjusted", 1)), s = f > 400 ? f / 500 : (f - 60) / 400, r = f > 400 ? "left" === V ? "30px auto 30px " + f / 24 + "px" : "30px " + f / 24 + "px 30px auto" : 0, l = {
                                    margin: r
                                }, a.log("coof", f > 400, s), 1 >= s && (l[D] = "scale(" + s + ", " + s + ")"), C.css(l)), "push" === v && d.each(function() {
                                    var a, e = $(this),
                                        n = e.css(D);
                                    "none" === n || e.data("ncf-transformed") || (e.data("ncf-old-matrix", n), n = _T.fromString(n), a = n.x(B), l = {}, l[D] = _T.toString(a), e.css(l))
                                }), x.removeClass("ncf_hidden").addClass("ncf_exposed ncf_transitioning").bind("mousewheel DOMMouseScroll", u), "push" === v && d.find("*").each(function(a, e) {
                                    o(a, e, g.scrollTop(), g.scrollLeft())
                                }), j.css("visibility", "visible"), C.removeClass("ncf_shrinked"), window.transitionEnd || setTimeout(function() {
                                    x.removeClass("ncf_transitioning"), W = !1, z = !0
                                }, 400), "function" == typeof n && n()
                            }
                        }

                        function i(a, e) {
                            var n, t;
                            return a && a.is(".nks-tab") && !a.is(".nks-active") ? (t = C.find("#" + a.attr("id").replace("tab", "content")), x.find(".nks-active").removeClass("nks-active"), t.add(a).addClass("nks-active"), t.find(".nks-shrinked").removeClass("nks-shrinked"), A.scrollTop(0), !1) : void(!W && z && (W = !0, A.unbind("mousewheel DOMMouseScroll", _), x.removeClass("ncf_exposed").addClass("ncf_transitioning"), k.data("ncf-adjusted") && k.css(D, "").data("ncf-adjusted", ""), "push" === v && x.children().not("#ncf_sidebar, script, style").each(function() {
                                var a = $(this);
                                a.data("ncf-old-matrix") ? a.css(D, a.data("ncf-old-matrix")).data("ncf-old-matrix", "") : a.css(D, "").data("ncf-transformed", "")
                            }), n = $(".ncf_fixed_inner_el"), Y && "push" === v && n.each(l), M.mouseleave(), $.fn.layerSlider && $("div[id*=layerslider]").layerSlider("start"), window.transitionEnd || ("push" === v && n.each(l).removeClass("ncf_fixed_inner_el"), setTimeout(function() {
                                x.unbind("mousewheel DOMMouseScroll", u).addClass("ncf_hidden"), C.addClass("ncf_shrinked").css({
                                    transform: "scale(1,1)",
                                    margin: "",
                                    width: ""
                                }), x.find(".nks-active").removeClass("nks-active"), j.css("visibility", "visible"), J && S.css("-webkit-overflow-scrolling", ""), x.removeClass("ncf_transitioning"), z = !1, W = !1
                            }, 400)), setTimeout(function() {
                                "function" == typeof e && e()
                            }, 400)))
                        }

                        function s(a, e) {
                            P.each(function() {
                                var n, t, i = $(this),
                                    s = i.find("li"),
                                    r = s.length,
                                    o = 0,
                                    l = a[i.parents(".ncf_form_wrapper").attr("data-index")];
                                for (t in l) l.hasOwnProperty(t) && o++;
                                0 === o && "minimalistic" === e && i.add(".ncf_line_sep:last").hide();
                                for (t in l) l.hasOwnProperty(t) && o >= 0 && (n = l[t], $('<a class="' + t + '" href="' + n + '" target="_blank"></a>').appendTo(s.eq(r - o)), o--);
                                "flat" !== e && i.find("li:empty").remove()
                            })
                        }

                        function r(a, e) {
                            var n = $(a),
                                t = n.parent(),
                                i = t.has(".ncf_err_msg").length ? t.find(".ncf_err_msg") : $('<div class="ncf_err_msg"></div>').appendTo(t);
                            i.is(":visible") || i.html(e).slideDown(200)
                        }

                        function o(a, e, n, t) {
                            var i, s, r, o, l, c, f, d, _, u, p = $(e);
                            if ("fixed" === p.css("position"))
                                if (p.addClass("ncf_fixed_inner_el"), Y) s = p.css(D), "none" !== s ? (p.data("ncf-old-matrix", s), s = _T.fromString(s), r = s.x(B), p.css(D, _T.toString(r)).data("ncf-transformed", 1)) : p.css(D, _T.toString(B)).data("ncf-transformed", 1);
                                else {
                                    for (i = p;
                                        (i = i.parent()) && (u = i.css(D), !(u && "none" !== u || i.is("body"))););
                                    o = i.offset(), l = o.left, c = o.top, O && p.is(":visible") && p.hide().data("ncf-ff-hidden", 1), f = {
                                        left: p.css("left"),
                                        right: p.css("right"),
                                        top: p.css("top"),
                                        bottom: p.css("bottom")
                                    }, O && p.data("ncf-ff-hidden") && p.show(), d = {}, _ = parseInt(f.bottom), _ = isNaN(_) ? 0 : _, "auto" !== f.left ? (f.toChangeHor = "left", d[f.toChangeHor] = "-=" + (l - t)) : "auto" !== f.right ? (f.toChangeHor = "right", d[f.toChangeHor] = "-=" + (l - t)) : f.toChangeHor = "left", "auto" !== f.top ? (f.toChangeVert = "top", d[f.toChangeVert] = c - n > 0 ? parseInt(f.top) - (c - n) : parseInt(f.top) + (n - c)) : "auto" !== f.bottom ? (f.toChangeVert = "bottom", d[f.toChangeVert] = x.height() + I.top + I.bottom + _ - g.height() - n + "px") : (f.toChangeVert = "top", d[f.toChangeVert] = n), d.transitionProperty = "none", p.css(d).data("ncf-old-pos", f)
                                }
                        }

                        function l(a, e) {
                            var n, t, i = $(e);
                            Y ? i.data("ncf-old-matrix") ? i.css(D, i.data("ncf-old-matrix")).data("ncf-old-matrix", "") : i.css(D, E).data("ncf-transformed", "") : (n = i.data("ncf-old-pos"), t = {}, n ? (t[n.toChangeHor] = n[n.toChangeHor], t[n.toChangeVert] = n[n.toChangeVert], t.transitionProperty = "", "bottom" === n.toChangeVert && (t.top = ""), i.css(t), i.data("ncf-old-pos", "")) : i.css({
                                left: "",
                                top: "",
                                bottom: "",
                                right: "",
                                transitionProperty: ""
                            }))
                        }

                        function c(a) {
                            var e = g.scrollTop(),
                                n = e + g.height(),
                                t = a.offset().top,
                                i = t;
                            return n >= i && t >= e
                        }

                        function f() {
                            var e, n, t, i, s;
                            z && (n = x.children().not("#ncf_sidebar, script, style"), e = g.width(), H + 40 > e ? ("push" === v ? n.each(function() {
                                var a = $(this),
                                    n = a.css(D);
                                "none" !== n && Q !== e && a.css(D, _T.toString(_T.translate("left" === V ? e - 60 : 60 - e, 0)))
                            }) : S.add(A).width(e - 60), t = e > 400 ? e / 500 : (e - 60) / 400, i = e > 400 ? "left" === V ? "30px auto 30px " + e / 24 + "px" : "30px " + e / 24 + "px 30px auto" : 0, s = {
                                margin: i
                            }, 1 >= t && (s[D] = "scale(" + t + ", " + t + ")"), a.log(s), C.css(s)) : ("push" === v && n.each(function() {
                                var a = $(this);
                                a.css(D, _T.toString(B))
                            }), s = {
                                margin: ""
                            }, s[D] = "scale(1,1)", C.css(s)), Q = e), opts.isBgFixed || b.css({
                                height: x.outerHeight()
                            })
                        }

                        function d() {
                            var a, e, n, s, r;
                            S.add(q).bind("touchstart", function(t) {
                                z && (n = (new Date).getTime(), a = t.originalEvent.touches[0].pageX, e = t.originalEvent.touches[0].clientY)
                            }).bind("touchmove", function(a) {
                                z && (s = a.originalEvent.touches[0].pageX, r = a.originalEvent.touches[0].clientY)
                            }).bind("touchend", function() {
                                if (z) {
                                    var o = s > a ? "right" : "left",
                                        l = r - e > 30 || -30 > r - e,
                                        c = s - a > 60 || -60 > s - a,
                                        f = (new Date).getTime();
                                    if (!(f - n > 300 || l) && c) switch (o) {
                                        case "left":
                                            "left" === V ? i() : t();
                                            break;
                                        case "right":
                                            "left" === V ? t() : i()
                                    }
                                }
                            })
                        }

                        function _(a) {
                            var e = null;
                            "mousewheel" == a.type ? e = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" == a.type && (e = 40 * a.originalEvent.detail), e && (a.preventDefault(), $(this).scrollTop(e + $(this).scrollTop()))
                        }

                        function u(a) {
                            ("mousewheel" == a.type || "DOMMouseScroll" == a.type) && a.preventDefault()
                        }

                        function p() {
                            return z
                        }

                        function m(a) {
                            var e, n, t = ["Moz", "Webkit", "O", "ms"],
                                i = document.createElement("div"),
                                s = a.charAt(0).toUpperCase() + a.substr(1);
                            if (a in i.style) return a;
                            for (n = 0; n < t.length; ++n)
                                if (e = t[n] + s, e in i.style) return e;
                            this.div = null
                        }
                        var b, h, v = opts.sidebar_type,
                            g = $(window),
                            w = $("html"),
                            x = $("body"),
                            k = (document.body, $(".nks_cc_trigger_tabs")),
                            y = k.filter(".ncf_tab"),
                            M = k.find(".ncf-tab-icon"),
                            j = $("#ncf-overlay-wrapper").appendTo(x),
                            q = j.children(),
                            S = $("#ncf_sidebar"),
                            A = S.find(".ncf_sidebar_cont_scrollable"),
                            C = S.find(".ncf_sidebar_cont"),
                            P = S.find(".ncf_sidebar_socialbar"),
                            N = S.find("form.ncf_form"),
                            F = $(".ncf_form_result"),
                            R = x.children().not("[id*=ncf], script, style").filter(":visible");
                        a.log(y.length);
                        var T, D = m("transform"),
                            V = opts.sidebar_pos,
                            H = 500,
                            G = !1,
                            K = /safari|chrome/.test(navigator.userAgent.toLowerCase()),
                            J = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent),
                            U = J ? /iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1 : !1,
                            W = !1,
                            z = !1,
                            Y = /msie|trident.*rv\:11\./.test(navigator.userAgent.toLowerCase()),
                            O = /firefox/.test(navigator.userAgent.toLowerCase()),
                            B = _T.translate("left" === V ? H : -H, 0),
                            E = _T.toString(_T.translate(0, 0)),
                            Q = g.width(),
                            I = {
                                top: parseInt(w.css("marginTop")),
                                bottom: parseInt(w.css("marginBottom"))
                            },
                            X = 0;
                        for (var L in I) isNaN(I[L]) && (I[L] = 0);
                        return b = $("#ncf-body-bg"), "push" === v && R.each(function() {
                            var a, e = $(this),
                                n = e.css("position");
                            "fixed" === n && (a = e.css("zIndex"), "auto" !== a && 0 > a && e.insertAfter(b).css("zIndex", 0))
                        }), NKS_DEBUG, {
                            init: n,
                            showSidebar: t,
                            hideSidebar: i,
                            visible: p
                        }
                    }();
                    window.NinjaSidebar = e.init()
                }, 0)
            }
        }), jQuery(document).trigger("ncf_ready")
}();