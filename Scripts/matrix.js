function CVector3(c,b,a){this.m_fV=new Array(3);this.m_fV[0]=c;this.m_fV[1]=b;this.m_fV[2]=a;this.SetVal=function(f,e,d){this.m_fV[0]=f;this.m_fV[1]=e;this.m_fV[2]=d};this.SetVec=function(d){this.m_fV[0]=d.m_fV[0];this.m_fV[1]=d.m_fV[1];this.m_fV[2]=d.m_fV[2]};this.Inverse=function(){this.m_fV[0]=-this.m_fV[0];this.m_fV[1]=-this.m_fV[1];this.m_fV[2]=-this.m_fV[2]};this.GetInverse=function(){return new CVector3(-this.m_fV[0],-this.m_fV[1],-this.m_fV[2])};this.Normalize=function(){var d=this.Mag();this.m_fV[0]=this.m_fV[0]/d;this.m_fV[1]=this.m_fV[1]/d;this.m_fV[2]=this.m_fV[2]/d};this.GetNormalize=function(){var d=this.Mag();return new CVector3(this.m_fV[0]/d,this.m_fV[1]/d,this.m_fV[2]/d)};this.Mag=function(){return Math.sqrt(this.m_fV[0]*this.m_fV[0]+this.m_fV[1]*this.m_fV[1]+this.m_fV[2]*this.m_fV[2])};this.SquareMag=function(){return(this.m_fV[0]*this.m_fV[0]+this.m_fV[1]*this.m_fV[1]+this.m_fV[2]*this.m_fV[2])};this.Dot=function(d){return this.m_fV[0]*d.m_fV[0]+this.m_fV[1]*d.m_fV[1]+this.m_fV[2]*d.m_fV[2]};this.Cross=function(d){return new CVector3(this.m_fV[1]*d.m_fV[2]-this.m_fV[2]*d.m_fV[1],this.m_fV[2]*d.m_fV[0]-this.m_fV[0]*d.m_fV[2],this.m_fV[0]*d.m_fV[1]-this.m_fV[1]*d.m_fV[0])};this.SetCross=function(e,d){this.m_fV[0]=e.m_fV[1]*d.m_fV[2]-e.m_fV[2]*d.m_fV[1];this.m_fV[1]=e.m_fV[2]*d.m_fV[0]-e.m_fV[0]*d.m_fV[2];this.m_fV[2]=e.m_fV[0]*d.m_fV[1]-e.m_fV[1]*d.m_fV[0]};this.Scale=function(d){this.m_fV[0]*=d;this.m_fV[1]*=d;this.m_fV[2]*=d};this.GetScale=function(d){return new CVector3(this.m_fV[0]*d,this.m_fV[1]*d,this.m_fV[2]*d)};this.CosineAngle=function(d){var f=this.Dot(d);var e=this.Mag()*d.Mag();if(e!=0){f/=e}return f};this.Add=function(d){this.m_fV[0]+=d.m_fV[0];this.m_fV[1]+=d.m_fV[1];this.m_fV[2]+=d.m_fV[2]};this.GetAdd=function(d){return new CVector3(this.m_fV[0]+d.m_fV[0],this.m_fV[1]+d.m_fV[1],this.m_fV[2]+d.m_fV[2])};this.SetAdd=function(e,d){this.m_fV[0]=e.m_fV[0]+d.m_fV[0];this.m_fV[1]=e.m_fV[1]+d.m_fV[1];this.m_fV[2]=e.m_fV[2]+d.m_fV[2]};this.Sub=function(d){this.m_fV[0]-=d.m_fV[0];this.m_fV[1]-=d.m_fV[1];this.m_fV[2]-=d.m_fV[2]};this.GetSub=function(d){return new CVector3(this.m_fV[0]-d.m_fV[0],this.m_fV[1]-d.m_fV[1],this.m_fV[2]-d.m_fV[2])};this.SetSub=function(e,d){this.m_fV[0]=e.m_fV[0]-d.m_fV[0];this.m_fV[1]=e.m_fV[1]-d.m_fV[1];this.m_fV[2]=e.m_fV[2]-d.m_fV[2]}}function CVector4(d,c,b,a){this.m_fV=new Array(4);this.m_fV[0]=d;this.m_fV[1]=c;this.m_fV[2]=b;this.m_fV[3]=a;this.SetVal=function(g,f,e,h){this.m_fV[0]=g;this.m_fV[1]=f;this.m_fV[2]=e;this.m_fV[3]=h};this.SetVec=function(e){this.m_fV[0]=e.m_fV[0];this.m_fV[1]=e.m_fV[1];this.m_fV[2]=e.m_fV[2];this.m_fV[3]=e.m_fV[3]};this.Inverse=function(){this.m_fV[0]=-this.m_fV[0];this.m_fV[1]=-this.m_fV[1];this.m_fV[2]=-this.m_fV[2];this.m_fV[3]=-this.m_fV[3]};this.GetInverse=function(){return new CVector4(-this.m_fV[0],-this.m_fV[1],-this.m_fV[2],-this.m_fV[3])};this.Normalize=function(){var e=this.Mag();this.m_fV[0]=this.m_fV[0]/e;this.m_fV[1]=this.m_fV[1]/e;this.m_fV[2]=this.m_fV[2]/e;this.m_fV[3]=this.m_fV[3]/e};this.GetNormalize=function(){var e=this.Mag();return new CVector4(this.m_fV[0]/e,this.m_fV[1]/e,this.m_fV[2]/e,this.m_fV[3]/e)};this.Mag=function(){return Math.sqrt(this.m_fV[0]*this.m_fV[0]+this.m_fV[1]*this.m_fV[1]+this.m_fV[2]*this.m_fV[2]+this.m_fV[3]*this.m_fV[3])};this.SquareMag=function(){return(this.m_fV[0]*this.m_fV[0]+this.m_fV[1]*this.m_fV[1]+this.m_fV[2]*this.m_fV[2]+this.m_fV[3]*this.m_fV[3])};this.Dot=function(e){return this.m_fV[0]*e.m_fV[0]+this.m_fV[1]*e.m_fV[1]+this.m_fV[2]*e.m_fV[2]+this.m_fV[3]*e.m_fV[3]};this.Scale=function(e){this.m_fV[0]*=e;this.m_fV[1]*=e;this.m_fV[2]*=e;this.m_fV[3]*=e};this.GetScale=function(e){return new CVector4(this.m_fV[0]*e,this.m_fV[1]*e,this.m_fV[2]*e,this.m_fV[3]*e)};this.NearestPowerof2=function(){this.m_fV[0]=NearestPowerOf2(this.m_fV[0]);this.m_fV[1]=NearestPowerOf2(this.m_fV[1]);this.m_fV[2]=NearestPowerOf2(this.m_fV[2]);this.m_fV[3]=NearestPowerOf2(this.m_fV[3])};this.GetNearestPowerof2=function(){return new CVector4(NearestPowerOf2(this.m_fV[0]),NearestPowerOf2(this.m_fV[1]),NearestPowerOf2(this.m_fV[2]),NearestPowerOf2(this.m_fV[3]))};this.CosineAngle=function(e){var g=this.Dot(e);var f=this.Mag()*e.Mag();if(f!=0){g/=f}return g};this.Add=function(e){this.m_fV[0]+=e.m_fV[0];this.m_fV[1]+=e.m_fV[1];this.m_fV[2]+=e.m_fV[2];this.m_fV[3]+=e.m_fV[3]};this.GetAdd=function(e){return new CVector4(this.m_fV[0]+e.m_fV[0],this.m_fV[1]+e.m_fV[1],this.m_fV[2]+e.m_fV[2],this.m_fV[3]+e.m_fV[3])};this.SetAdd=function(f,e){this.m_fV[0]=f.m_fV[0]+e.m_fV[0];this.m_fV[1]=f.m_fV[1]+e.m_fV[1];this.m_fV[2]=f.m_fV[2]+e.m_fV[2];this.m_fV[3]=f.m_fV[3]+e.m_fV[3]};this.Sub=function(e){this.m_fV[0]-=e.m_fV[0];this.m_fV[1]-=e.m_fV[1];this.m_fV[2]-=e.m_fV[2];this.m_fV[3]-=e.m_fV[3]};this.GetSub=function(e){return new CVector4(this.m_fV[0]-e.m_fV[0],this.m_fV[1]-e.m_fV[1],this.m_fV[2]-e.m_fV[2],this.m_fV[3]-e.m_fV[3])};this.SetSub=function(f,e){this.m_fV[0]=f.m_fV[0]-e.m_fV[0];this.m_fV[1]=f.m_fV[1]-e.m_fV[1];this.m_fV[2]=f.m_fV[2]-e.m_fV[2];this.m_fV[3]=f.m_fV[3]-e.m_fV[3]};this.Printf=function(){return("("+(new String(this.m_fV[0]))+","+(new String(this.m_fV[1]))+","+(new String(this.m_fV[2]))+","+(new String(this.m_fV[3]))+")")}}function CMatrix4(){this.m_fV=new Array(16);for(var b=0;b<4;b++){for(var a=0;a<4;a++){if(b==a){this.m_fV[a+b*4]=1}else{this.m_fV[a+b*4]=0}}}this.SetVal=function(c,e,d){this.m_fV[e+c*4]=d};this.SetZero=function(){var c;for(c=0;c<16;c++){this.m_fV[c]=0}};this.Identity=function(){for(var d=0;d<4;d++){for(var c=0;c<4;c++){if(d==c){this.m_fV[c+d*4]=1}else{this.m_fV[c+d*4]=0}}}};this.SetMat=function(c){var d;for(d=0;d<16;d++){this.m_fV[d]=c.m_fV[d]}};this.Add=function(c){var d;for(d=0;d<16;d++){this.m_fV[d]+=c.m_fV[d]}};this.GetAdd=function(c){var e=new CMatrix4();var d;for(d=0;d<16;d++){e.m_fV[d]=this.m_fV[d]+c.m_fV[d]}return e};this.Sub=function(c){var d;for(d=0;d<16;d++){this.m_fV[d]-=c.m_fV[d]}};this.GetSub=function(c){var e=new CMatrix4();var d;for(d=0;d<16;d++){e.m_fV[d]=this.m_fV[d]-c.m_fV[d]}return e};this.Scale=function(d){var c;for(c=0;c<16;c++){this.m_fV[c]*=d}};this.ScaleVector=function(c){for(var e=0;e<4;e++){for(var d=0;d<4;d++){this.m_fV[d+e*4]*=c.m_fV[e]}}};this.Multiply=function(c){var d=this.GetMultiply(c);this.Copy(d)};this.GetMultiply=function(c){var d=new CMatrix4();d.m_fV[0]=this.m_fV[0]*c.m_fV[0]+this.m_fV[4]*c.m_fV[1]+this.m_fV[8]*c.m_fV[2]+this.m_fV[12]*c.m_fV[3];d.m_fV[1]=this.m_fV[1]*c.m_fV[0]+this.m_fV[5]*c.m_fV[1]+this.m_fV[9]*c.m_fV[2]+this.m_fV[13]*c.m_fV[3];d.m_fV[2]=this.m_fV[2]*c.m_fV[0]+this.m_fV[6]*c.m_fV[1]+this.m_fV[10]*c.m_fV[2]+this.m_fV[14]*c.m_fV[3];d.m_fV[3]=this.m_fV[3]*c.m_fV[0]+this.m_fV[7]*c.m_fV[1]+this.m_fV[11]*c.m_fV[2]+this.m_fV[15]*c.m_fV[3];d.m_fV[4]=this.m_fV[0]*c.m_fV[4]+this.m_fV[4]*c.m_fV[5]+this.m_fV[8]*c.m_fV[6]+this.m_fV[12]*c.m_fV[7];d.m_fV[5]=this.m_fV[1]*c.m_fV[4]+this.m_fV[5]*c.m_fV[5]+this.m_fV[9]*c.m_fV[6]+this.m_fV[13]*c.m_fV[7];d.m_fV[6]=this.m_fV[2]*c.m_fV[4]+this.m_fV[6]*c.m_fV[5]+this.m_fV[10]*c.m_fV[6]+this.m_fV[14]*c.m_fV[7];d.m_fV[7]=this.m_fV[3]*c.m_fV[4]+this.m_fV[7]*c.m_fV[5]+this.m_fV[11]*c.m_fV[6]+this.m_fV[15]*c.m_fV[7];d.m_fV[8]=this.m_fV[0]*c.m_fV[8]+this.m_fV[4]*c.m_fV[9]+this.m_fV[8]*c.m_fV[10]+this.m_fV[12]*c.m_fV[11];d.m_fV[9]=this.m_fV[1]*c.m_fV[8]+this.m_fV[5]*c.m_fV[9]+this.m_fV[9]*c.m_fV[10]+this.m_fV[13]*c.m_fV[11];d.m_fV[10]=this.m_fV[2]*c.m_fV[8]+this.m_fV[6]*c.m_fV[9]+this.m_fV[10]*c.m_fV[10]+this.m_fV[14]*c.m_fV[11];d.m_fV[11]=this.m_fV[3]*c.m_fV[8]+this.m_fV[7]*c.m_fV[9]+this.m_fV[11]*c.m_fV[10]+this.m_fV[15]*c.m_fV[11];d.m_fV[12]=this.m_fV[0]*c.m_fV[12]+this.m_fV[4]*c.m_fV[13]+this.m_fV[8]*c.m_fV[14]+this.m_fV[12]*c.m_fV[15];d.m_fV[13]=this.m_fV[1]*c.m_fV[12]+this.m_fV[5]*c.m_fV[13]+this.m_fV[9]*c.m_fV[14]+this.m_fV[13]*c.m_fV[15];d.m_fV[14]=this.m_fV[2]*c.m_fV[12]+this.m_fV[6]*c.m_fV[13]+this.m_fV[10]*c.m_fV[14]+this.m_fV[14]*c.m_fV[15];d.m_fV[15]=this.m_fV[3]*c.m_fV[12]+this.m_fV[7]*c.m_fV[13]+this.m_fV[11]*c.m_fV[14]+this.m_fV[15]*c.m_fV[15];return d};this.GetDotVector=function(c){return new CVector4(this.m_fV[0]*c.m_fV[0]+this.m_fV[4]*c.m_fV[1]+this.m_fV[8]*c.m_fV[2]+this.m_fV[12]*c.m_fV[3],this.m_fV[1]*c.m_fV[0]+this.m_fV[5]*c.m_fV[1]+this.m_fV[9]*c.m_fV[2]+this.m_fV[13]*c.m_fV[3],this.m_fV[2]*c.m_fV[0]+this.m_fV[6]*c.m_fV[1]+this.m_fV[10]*c.m_fV[2]+this.m_fV[14]*c.m_fV[3],this.m_fV[3]*c.m_fV[0]+this.m_fV[7]*c.m_fV[1]+this.m_fV[11]*c.m_fV[2]+this.m_fV[15]*c.m_fV[3])};this.GetDotVector3=function(c){return new CVector3(this.m_fV[0]*c.m_fV[0]+this.m_fV[4]*c.m_fV[1]+this.m_fV[8]*c.m_fV[2]+this.m_fV[12]*1,this.m_fV[1]*c.m_fV[0]+this.m_fV[5]*c.m_fV[1]+this.m_fV[9]*c.m_fV[2]+this.m_fV[13]*1,this.m_fV[2]*c.m_fV[0]+this.m_fV[6]*c.m_fV[1]+this.m_fV[10]*c.m_fV[2]+this.m_fV[14]*1)};this.InverseScaleVector=function(c){for(var e=0;e<4;e++){for(var d=0;d<4;d++){this.m_fV[d+e*4]*=(1/c.m_fV[e])}}};this.Inverse=function(){var g,e,d,h;var f;var c=new CMatrix4();c=this.GetInverse();this.Copy(c)};this.GetInverse=function(){var g,e,d,l;var f;var h=new CMatrix4();var c=new CMatrix4();c.Copy(this);h.Identity();for(g=0;g<4;g++){l=g;for(e=g+1;e<4;e++){if(Math.abs(c.m_fV[e*4+g])>Math.abs(c.m_fV[g*4+g])){l=e}}if(l!=g){for(d=0;d<4;d++){f=c.m_fV[g*4+d];c.m_fV[g*4+d]=c.m_fV[l*4+d];c.m_fV[l*4+d]=f;f=h.m_fV[g*4+d];h.m_fV[g*4+d]=h.m_fV[l*4+d];h.m_fV[l*4+d]=f}}if(c.m_fV[g*4+g]==0){return}f=c.m_fV[g*4+g];for(d=0;d<4;d++){c.m_fV[g*4+d]/=f;h.m_fV[g*4+d]/=f}for(e=0;e<4;e++){if(e!=g){f=c.m_fV[e*4+g];for(d=0;d<4;d++){c.m_fV[e*4+d]-=(f*c.m_fV[g*4+d]);h.m_fV[e*4+d]-=(f*h.m_fV[g*4+d])}}}}return h};this.Transpose=function(){var c;c=this.m_fV[1];this.m_fV[1]=this.m_fV[4];this.m_fV[4]=c;c=this.m_fV[8];this.m_fV[8]=this.m_fV[2];this.m_fV[2]=c;c=this.m_fV[12];this.m_fV[12]=this.m_fV[3];this.m_fV[3]=c;c=this.m_fV[9];this.m_fV[9]=this.m_fV[6];this.m_fV[6]=c;c=this.m_fV[13];this.m_fV[13]=this.m_fV[7];this.m_fV[7]=c;c=this.m_fV[14];this.m_fV[14]=this.m_fV[11];this.m_fV[11]=c};this.SetAngleMatrix=function(c,d){this.SetRadianMatrix((c*Math.PI)/180,d)};this.SetRadianMatrix=function(n,f){var e=f.Mag();var m=Math.sin(n);var r=Math.cos(n);if(e<6e-7){this.Identity();return}var l=f.m_fV[0];var k=f.m_fV[1];var i=f.m_fV[2];l/=e;k/=e;i/=e;var h=l*l;var p=k*k;var t=i*i;var g=l*k;var o=k*i;var v=i*l;var j=l*m;var q=k*m;var d=i*m;var u=1-r;this.m_fV[0]=(u*h)+r;this.m_fV[4]=(u*g)-d;this.m_fV[8]=(u*v)+q;this.m_fV[12]=0;this.m_fV[1]=(u*g)+d;this.m_fV[5]=(u*p)+r;this.m_fV[9]=(u*o)-j;this.m_fV[13]=0;this.m_fV[2]=(u*v)-q;this.m_fV[6]=(u*o)+j;this.m_fV[10]=(u*t)+r;this.m_fV[14]=0;this.m_fV[3]=0;this.m_fV[7]=0;this.m_fV[11]=0;this.m_fV[15]=1};this.SetScaleMatrix=function(c){this.m_fV[0]=c.m_fV[0];this.m_fV[1]=0;this.m_fV[2]=0;this.m_fV[3]=0;this.m_fV[4]=0;this.m_fV[5]=c.m_fV[1];this.m_fV[6]=0;this.m_fV[7]=0;this.m_fV[8]=0;this.m_fV[9]=0;this.m_fV[10]=c.m_fV[2];this.m_fV[11]=0;this.m_fV[12]=0;this.m_fV[13]=0;this.m_fV[14]=0;this.m_fV[15]=1};this.SetTranslateMatrix=function(c){this.m_fV[0]=1;this.m_fV[1]=0;this.m_fV[2]=0;this.m_fV[3]=0;this.m_fV[4]=0;this.m_fV[5]=1;this.m_fV[6]=0;this.m_fV[7]=0;this.m_fV[8]=0;this.m_fV[9]=0;this.m_fV[10]=1;this.m_fV[11]=0;this.m_fV[12]=c.m_fV[0];this.m_fV[13]=c.m_fV[1];this.m_fV[14]=c.m_fV[2];this.m_fV[15]=1};this.SetLookAt=function(h,e,d){var c;var g;var f;c=e.GetSub(h);c.Normalize();g=c.Cross(d);g.Normalize();f=g.Cross(c);this.m_fV[0]=g.m_fV[0];this.m_fV[1]=g.m_fV[1];this.m_fV[2]=g.m_fV[2];this.m_fV[3]=0;this.m_fV[4]=f.m_fV[0];this.m_fV[5]=f.m_fV[1];this.m_fV[6]=f.m_fV[2];this.m_fV[7]=0;this.m_fV[8]=-c.m_fV[0];this.m_fV[9]=-c.m_fV[1];this.m_fV[10]=-c.m_fV[2];this.m_fV[11]=0;this.m_fV[12]=h.m_fV[0];this.m_fV[13]=h.m_fV[1];this.m_fV[14]=h.m_fV[2];this.m_fV[15]=1;this.AffineInverse()};this.SetFov=function(f,d,h,i){var g=24;var c=2*Math.atan2(g/2,f);var e=(180*c)/Math.PI;this.SetPerspective(e,d,h,i)};this.SetFovByObject=function(g,c,e,h,i){var d=2*Math.atan2(g/2,c);var f=(180*d)/Math.PI;this.SetPerspective(f,e,h,i)};this.SetPerspective=function(g,e,h,j){this.Identity();var i=g/2*Math.PI/180;var d=Math.sin(i);var c=j-h;var f=Math.cos(i)/d;this.m_fV[0]=f/e;this.m_fV[5]=f;this.m_fV[10]=-(j+h)/c;this.m_fV[11]=-1;this.m_fV[14]=-2*j*h/c;this.m_fV[15]=0};this.SetFrustum=function(c,g,d,e,f,h){this.m_fV[0]=2*f/(g-c);this.m_fV[1]=0;this.m_fV[2]=0;this.m_fV[3]=0;this.m_fV[4]=0;this.m_fV[5]=2*f/(e-d);this.m_fV[6]=0;this.m_fV[7]=0;this.m_fV[8]=(g+c)/(g-c);this.m_fV[9]=(e+d)/(e-d);this.m_fV[10]=-(h+f)/(h-f);this.m_fV[11]=-1;this.m_fV[12]=0;this.m_fV[13]=0;this.m_fV[14]=-(2*h*f)/(h-f);this.m_fV[15]=0};this.SetOrtho=function(c,g,d,e,f,h){this.m_fV[0]=2/(g-c);this.m_fV[1]=0;this.m_fV[2]=0;this.m_fV[3]=0;this.m_fV[4]=0;this.m_fV[5]=2/(e-d);this.m_fV[6]=0;this.m_fV[7]=0;this.m_fV[8]=0;this.m_fV[9]=0;this.m_fV[10]=-2/(h-f);this.m_fV[11]=0;this.m_fV[12]=-(g+c)/(g-c);this.m_fV[13]=-(e+d)/(e-d);this.m_fV[14]=-(h+f)/(h-f);this.m_fV[15]=1};this.SetOrtho2D=function(c,f,d,e){this.SetOrtho(c,f,d,e,-1,1)};this.SetBillboard=function(h,e,d){var c;var g;var f=new CVector3();c=e.GetSub(h);c.Normalize();g=c.Cross(d);g.Normalize();f=g.Cross(c);this.m_fV[0]=g.m_fV[0];this.m_fV[1]=g.m_fV[1];this.m_fV[2]=g.m_fV[2];this.m_fV[3]=0;this.m_fV[4]=f.m_fV[0];this.m_fV[5]=f.m_fV[1];this.m_fV[6]=f.m_fV[2];this.m_fV[7]=0;this.m_fV[8]=-c.m_fV[0];this.m_fV[9]=-c.m_fV[1];this.m_fV[10]=-c.m_fV[2];this.m_fV[11]=0;this.m_fV[12]=h.m_fV[0];this.m_fV[13]=h.m_fV[1];this.m_fV[14]=h.m_fV[2];this.m_fV[15]=1};this.Translate=function(c){this.m_fV[12]=this.m_fV[0]*c.m_fV[0]+this.m_fV[4]*c.m_fV[1]+this.m_fV[8]*c.m_fV[2]+this.m_fV[12];this.m_fV[13]=this.m_fV[1]*c.m_fV[0]+this.m_fV[5]*c.m_fV[1]+this.m_fV[9]*c.m_fV[2]+this.m_fV[13];this.m_fV[14]=this.m_fV[2]*c.m_fV[0]+this.m_fV[6]*c.m_fV[1]+this.m_fV[10]*c.m_fV[2]+this.m_fV[14];this.m_fV[15]=this.m_fV[3]*c.m_fV[0]+this.m_fV[7]*c.m_fV[1]+this.m_fV[11]*c.m_fV[2]+this.m_fV[15]};this.Rotate=function(d,e){var c=new CMatrix4();c.SetAngleMatrix(d,e);this.Multiply(c)};this.RotateRadian=function(d,e){var c=new CMatrix4();c.SetRadianMatrix(d,e);this.Multiply(c)};this.ScaleVector3=function(c){this.m_fV[0]*=c.m_fV[0];this.m_fV[1]*=c.m_fV[0];this.m_fV[2]*=c.m_fV[0];this.m_fV[3]*=c.m_fV[0];this.m_fV[4]*=c.m_fV[1];this.m_fV[5]*=c.m_fV[1];this.m_fV[6]*=c.m_fV[1];this.m_fV[7]*=c.m_fV[1];this.m_fV[8]*=c.m_fV[2];this.m_fV[9]*=c.m_fV[2];this.m_fV[10]*=c.m_fV[2];this.m_fV[11]*=c.m_fV[2]};this.InverseTranslate=function(c){this.Translate(c.GetScale(-1))};this.InverseRotate=function(c,d){this.Rotate(-c,d)};this.InverseRotateRadian=function(c,d){this.RotateRadian(-c,d)};this.InverseScaleVector3=function(c){this.ScaleVector3(c.GetScale(-1))};this.AffineInverse=function(){var c=new CMatrix4();c.Copy(this);this.m_fV[0]=c.m_fV[0];this.m_fV[4]=c.m_fV[1];this.m_fV[8]=c.m_fV[2];this.m_fV[1]=c.m_fV[4];this.m_fV[5]=c.m_fV[5];this.m_fV[9]=c.m_fV[6];this.m_fV[2]=c.m_fV[8];this.m_fV[6]=c.m_fV[9];this.m_fV[10]=c.m_fV[10];this.m_fV[3]=0;this.m_fV[7]=0;this.m_fV[11]=0;this.m_fV[15]=1;this.m_fV[12]=-(c.m_fV[0]*c.m_fV[12]+c.m_fV[1]*c.m_fV[13]+c.m_fV[2]*c.m_fV[14]);this.m_fV[13]=-(c.m_fV[4]*c.m_fV[12]+c.m_fV[5]*c.m_fV[13]+c.m_fV[6]*c.m_fV[14]);this.m_fV[14]=-(c.m_fV[8]*c.m_fV[12]+c.m_fV[9]*c.m_fV[13]+c.m_fV[10]*c.m_fV[14])};this.GetAffineInverse=function(){var c=new CMatrix4();c.Copy(this);c.AffineInverse();return c};this.Flip=function(d){var c=new CMatrix4();if(d.m_fV[0]>0){c.m_fV[0]=-1}if(d.m_fV[1]>0){c.m_fV[5]=-1}if(d.m_fV[2]>0){c.m_fV[10]=-1}this.Multiply(c)};this.Printf=function(){var c;c="<br> ("+this.m_fV[0]+","+this.m_fV[4]+","+this.m_fV[8]+","+this.m_fV[12]+")";c+="<br> ("+this.m_fV[1]+","+this.m_fV[5]+","+this.m_fV[9]+","+this.m_fV[13]+")";c+="<br> ("+this.m_fV[2]+","+this.m_fV[6]+","+this.m_fV[10]+","+this.m_fV[14]+")";c+="<br> ("+this.m_fV[3]+","+this.m_fV[7]+","+this.m_fV[11]+","+this.m_fV[15]+")<br>";return c};this.Copy=function(c){var d;for(d=0;d<16;d++){this.m_fV[d]=c.m_fV[d]}}};