(this.webpackJsonparemores=this.webpackJsonparemores||[]).push([[0],{13:function(e,a,t){},40:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(1),i=(t(36),t(0)),o=t.n(i),r=t(14),s=t.n(r),c=(t(40),t(6)),l=t(3),d="/aremores",h={aboutUs:d,cabinRentals:"".concat(d,"/cabin-rentals"),explore:"".concat(d,"/explore"),reviews:"".concat(d,"/reviews"),contact:"".concat(d,"/contact"),family:"".concat(d,"/family")},m={pineLodge:"".concat(h.cabinRentals,"/pine-lodge"),pineCone:"".concat(h.cabinRentals,"/pine-cone"),reservations:"".concat(h.cabinRentals,"/reservations")},b={membersLogin:"".concat(h.family,"/members-login"),heidi:"".concat(h.family,"/heidi"),weddingAnniversity:"".concat(h.family,"/50th-wedding-anniversary"),monument:"".concat(h.family,"/monument")},u=Object(l.a)(Object(l.a)(Object(l.a)({},h),m),b),g=t(17),j=(t(43),Object(c.f)((function(e){var a=e.className,t=e.categories,i=e.categoriesData,o=e.history,r=function(e){o.push(u[e])},s=t.map((function(e){var a=i[e].subcategoriesAll;if(a.length){var t=i[e].subcategoriesByName,o=a.map((function(e){return Object(n.jsx)(g.c,{className:"subcategory-item",onClick:function(){return r(e)},children:t[e]},e)}));return Object(n.jsx)(g.a,{arrow:!0,align:"end",menuButton:Object(n.jsx)("div",{className:"header-menu-item",children:Object(n.jsx)(g.b,{className:"header-menu-button",children:i[e].label})}),children:o},e)}return Object(n.jsx)("div",{className:"header-menu-item",children:Object(n.jsx)(g.b,{className:"header-menu-button",onClick:function(){return r(e)},children:i[e].label})},e)}));return Object(n.jsx)("div",{className:"header-menu ".concat(a),children:s})}))),p=t.p+"static/media/logo-personal-only.2ae99f50.png",y=function(){return Object(n.jsx)("div",{className:"aremores-logo",children:Object(n.jsx)("img",{alt:"AREMORES, LLC. Family Tree Farm & Cabin Rentals",src:p,nopin:"nopin"})})},f={menuCategoriesByName:{aboutUs:{label:"About Us",subcategoriesByName:{},subcategoriesAll:[]},rentals:{label:"Cabin Rentals",subcategoriesByName:{pineCone:"Pine Cone",pineLodge:"Pine Lodge",reservations:"Reservations"},subcategoriesAll:["pineCone","pineLodge","reservations"]},explore:{label:"Explore the Area",subcategoriesByName:{},subcategoriesAll:[]},contact:{label:"Contact Us",subcategoriesByName:{},subcategoriesAll:[]}},menuCategoriesAll:["aboutUs","rentals","explore","contact"]},v={menuCategoriesByName:{family:{label:"Family",subcategoriesByName:{membersLogin:"Members Login",heidi:"Heidi",weddingAnniversity:"50th Wedding Anniversary",monument:"Family Monument"},subcategoriesAll:["heidi","weddingAnniversity","monument","membersLogin"]}},menuCategoriesAll:["family"]},x=function(){return Object(n.jsxs)("div",{className:"aremores-header",children:[Object(n.jsx)(j,{className:"family",categories:v.menuCategoriesAll,categoriesData:v.menuCategoriesByName}),Object(n.jsx)(y,{})]})},w=(t(47),function(){return Object(n.jsx)("div",{className:"header-wrapper",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(j,{className:"main",categories:f.menuCategoriesAll,categoriesData:f.menuCategoriesByName}),Object(n.jsx)(x,{})]})})}),O=(t(13),t.p+"static/media/about-us-main.2a638e05.jpg"),N=t.p+"static/media/aremores-static-map.cae96ff6.jpg",C=(t(48),t(58)),k=function(e){var a=e.image,t=e.description;return Object(n.jsx)("div",{className:"primary-image",children:Object(n.jsx)(C.a,{border:"secondary",children:Object(n.jsxs)(C.a.Body,{children:[Object(n.jsx)(C.a.Img,{variant:"bottom",src:a,"aria-hidden":!0}),Object(n.jsx)(C.a.Text,{children:t})]})})})},A=(t(49),t(57)),R=function(e){var a=e.page;return Object(n.jsx)("div",{className:"page-nav-wrapper",children:Object(n.jsxs)("div",{className:"page-nav-content",children:[Object(n.jsx)("h1",{className:"page-title",children:a.label}),Object(n.jsx)(A.a,{children:a.categoriesAll&&a.categoriesAll.map((function(e){var t=a.categoriesByName[e];return Object(n.jsx)(A.a.Item,{action:!0,href:t.link,children:t.label},e)}))})]})})},L={categoriesByName:{details:{label:"Details",link:"#details"},amenities:{label:"Amenities",link:"#amenities"},gallery:{label:"Gallery",link:"#gallery"},reviews:{label:"Reviews",link:"#reviews"}},categoriesAll:["details","amenities","gallery","reviews"]},B={aboutUs:{label:"About Us",categoriesByName:{history:{label:"History",link:"#history"},location:{label:"Location",link:"#location"}},categoriesAll:["history","location"]},pineLodge:Object(l.a)({label:"Pine Lodge Cabin Rental"},L),pineCone:Object(l.a)({label:"Pine Cone Cabin Rental"},L),reservations:{label:"Reservations",categoriesByName:{pineLodge:{label:"Pine Lodge",link:"#pineLodge"},pineCone:{label:"Pine Cone",link:"#pineCone"}},categoriesAll:["pineLodge","pineCone"]},explore:{label:"Explore the Area",categoriesByName:{comingSoon:{label:"Coming Soon",link:"#comingSoon"}},categoriesAll:["comingSoon"]},contact:{label:"Contact Us"}},I=function(e){var a=e.primaryImage,t=e.pageName,i=e.pageContent;return Object(n.jsx)("div",{className:"page-content ".concat(t),children:Object(n.jsxs)("div",{className:"page",children:[Object(n.jsxs)("div",{className:"page-body",children:[Object(n.jsx)(k,{image:a.image,description:a.description}),i]}),Object(n.jsx)("div",{className:"page-nav",children:Object(n.jsx)(R,{page:B[t]})})]})})},T=(t(50),function(e){var a=e.id,t=e.title;return Object(n.jsx)("h2",{id:a,className:"section-title",children:t})}),S=function(){var e={image:O,description:"A forest in late autumn"},a=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T,{id:"history",title:""}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"AREMORES, LLC"})," is a family tree farm located in the Northwest Arkansas mountains. It is operated as a limited liability company whose members are legal descendents of Robin and Ruth Moore.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"The founders' intent was that AREMORES exist in perpetuity as a haven attesting to the Glory of God\u2019s creation by being available for the families of their descendents and their friends, by being profitable through best management practices of its resources, and by being a responsible community member through taxation and charitable giving. Rental accommodations are available on most weekends.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"AREMORES members and its member-managers work to sustain the properties for indefinite use. Although timber management is of primary importance, AREMORES business activities also focus on sustainability considerations regarding soil and water conservation, recreational improvements, and wildlife habitat improvements.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Located near Ponca, Arkansas in the upper region of the Buffalo National River, AREMORES offers two idyllic rental accommodations - primitive PINE CONE CABIN and modern PINE LODGE CABIN. Nearby recreational and sightseeing activities are outstanding."]}),Object(n.jsx)(T,{id:"location",title:"Location"}),Object(n.jsx)("p",{className:"page-content aboutUs__location",children:"AREMORES is located in NW Arkansas, approximately 60 miles E of Fayetteville, and 10 miles SW of Compton. GPS: 36.04419, -93.41746."}),Object(n.jsx)("p",{children:"From Harrison, AR (~45 min)"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"Go South on US 43 to Compton. Continue 4.9 mi south on US 43."}),Object(n.jsx)("li",{children:"Turn right (west) on blacktop (Firetower Road (N C 1300) - not Hwy 103)"}),Object(n.jsx)("li",{children:"Continue 3.4 miles to crossroads (see Stoverville sign)"}),Object(n.jsx)("li",{children:"Turn right (north) on gravel (N C 1350). Go 1 mile (always keeping left) to (N C 1355)"}),Object(n.jsxs)("li",{children:["Follow signs to ",Object(n.jsx)("strong",{children:"check-in"})]})]}),Object(n.jsxs)("p",{children:["You can also get to Firetower Road (N C 1300) from:",Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Hwy 43 via Ponca from the south"}),Object(n.jsx)("li",{children:"Hwy 21 via Kingston from the north"}),Object(n.jsx)("li",{children:"Hwy 21 via Boxley from the south"})]})]}),Object(n.jsxs)("div",{className:"maps",children:[Object(n.jsx)("div",{className:"map-static",children:Object(n.jsx)("img",{src:N,alt:"Static map showing location of AREMORES cabin rentals"})}),Object(n.jsx)("div",{className:"map-embed",children:Object(n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9945.082654264503!2d-93.42313328855649!3d36.04489878515588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ce97ff06d728bd%3A0xfd9b0e70fb916b55!2sAremore's%20Pine%20Cone%20%26%20Pine%20Lodge%20Cabins!5e1!3m2!1sen!2sus!4v1610833598181!5m2!1sen!2sus",width:"600",height:"450",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})})]})]});return Object(n.jsx)(I,{pageName:"aboutUs",primaryImage:e,pageContent:a})},E=t.p+"static/media/pine-lodge-main.66edb4c5.jpg",M=(t(51),t(56)),P={pineLodge:{reviews:{0:{review:"Thank you for letting us stay in your beautiful lodge.  It truly is a great place for family togetherness.  All the little \u201cextras\u201d really make the difference.  I look forward to future stays in your lodge. P.S. Love the crows' nest!",author:"",date:"7-30-15"},1:{review:"Staying here was more than we could ever imagined.  So peaceful! Loved sitting around the table with family.  You have thought of everything! All the accommodations anyone would need.  Loved sitting around the fires and relaxing and visiting. Loved being able to look outside at every turn. Thank you so much for the hospitality.",author:"",date:""},2:{review:"Thank you Robin and Ruth. We think you have a real neat place here and are glad to have been able to find you.",author:"",date:""},3:{review:"We had a wonderful time! Your lodge was perfect for us.",author:"",date:""},4:{review:"This was our family's second time and we felt more and more at home with each stay.  There was plenty of room for our family of 3 children and their spouses and children.  Three of our favorite things are the large picture windows which give you a 360 degree view to the beautiful outdoors, the large table and booth which allow seating for 18+ people and a cool, comfortable sleeping environment, allowing everyone to sleep in after an eventful day on the Buffalo.  There are a number of activities for the kids, and kids at heart to do while others enjoy the lodge itself (i.e. pool, basketball, ping pong, tether ball, horseshoes, and fun hikes suitable for children.  And that's not including everything there is to do in Ponca, Boxley, Jasper, and Branson, all a short drive away.  This lodge is close to anything one could ever need, especially on a weekend getaway. We can't wait to come back!",author:"",date:""},5:{review:"We just wanted to drop you a note to say how much we enjoyed our stay in Pine Lodge.  It was a wonderful experience for the family gathering including our 4 grandbabies.  It is a well-designed, fully accommodating facility.  Thanks so much for creating a home to make memories in.",author:"",date:""},6:{review:"Our stay here was very enjoyable. Your place is very homey and clean and we will definitely be making our way back here to stay again.",author:"",date:""},7:{review:"This was our second stay here. We had such a good time in the summer, I decided to bring more of my family members.  There were 12 of us this time and our stay was even more enjoyable than the first. We might make this an annual event.",author:"",date:""},8:{review:"We enjoyed our stay very much! We brought our youth group for our Fall Retreat and this house exceeded our expectations! We'll be back next year!",author:"",date:""},9:{review:"We all loved our stay here! This is actually our second time! The kids loved playing basketball on the court and hiking through the woods. We roasted hot dogs and marshmallows at the fire pit after a day of relaxing, playing, and elk watching! We love this lodge and will definitely be back.",author:"",date:""},10:{review:"Merry Christmas\u2026 \u201cand all was well, and all was well, and all manner of things were very well!!\u201d We had 31 total coming and going for a week \u2013 15 overnighters at a time.  Great Memories. The apartment was great for a quiet place for the little one.  Very merry.",author:"",date:""},11:{review:"Thank you so much for letting us use you lodge cabin again this year. The scouts enjoyed the hike, the tree planting, and the use of your fun facilities. The boys (& adults) all had a great time and learned a lot. Thank you again for your generosity.",author:"",date:""}}},pineCone:{reviews:{0:{review:"We had a great time at the cabin. It was extremely peaceful and a much needed get-a-way.  Thank you for everything.",author:"",date:""},1:{review:"I would like to thank you for the hospitality we received while staying with you this past weekend. It was exactly what my boys and I were looking for. We loved the rustic charm of the Pine Cone Cabin.  You can tell anyone who may inquire, if they are looking for some peace and quiet to recharge both mind and spirit, this little \u201cgem\u201d in the Ozarks is just the place.",author:"",date:""},2:{review:"Thank you Mr. Robin. We (heart) (heart) the Pine Cone.*",author:"*(This family\u2019s second weekend with their 4 young children.)",date:""}}}},W=function(e){var a=e.rentalName,t=P[a].reviews,i="#212529",o="50",r=Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:i,className:"bi bi-chevron-left",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})}),s=Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,fill:i,className:"bi bi-chevron-right",viewBox:"0 0 16 16",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(T,{id:"reviews",title:"Reviews"}),Object(n.jsx)("div",{className:"reviews-wrapper",children:Object(n.jsx)(M.a,{className:"reviews",nextIcon:s,prevIcon:r,children:Object.values(t).map((function(e){return Object(n.jsxs)(M.a.Item,{children:[Object(n.jsx)(C.a,{bg:"light",children:e.review}),Object(n.jsxs)(M.a.Caption,{children:[Object(n.jsx)("h3",{children:e.author}),Object(n.jsx)("p",{children:e.date})]})]})}))})})]})},F=function(){var e="pineLodge",a={image:E,description:"A place to gather."},t=Object(n.jsx)(W,{rentalName:e});return Object(n.jsx)(I,{pageName:e,primaryImage:a,pageContent:t})},U=t.p+"static/media/pine-cone-main.36162c8e.jpg",G=function(){var e="pineCone",a={image:U,description:"An isolated cabin in the woods."},t=Object(n.jsx)(W,{rentalName:e});return Object(n.jsx)(I,{pageName:e,primaryImage:a,pageContent:t})},H=function(){var e={image:O,description:"Coming soon!"};return Object(n.jsx)(I,{pageName:"reservations",primaryImage:e,pageContent:""})},D=function(){var e={image:O,description:"Coming soon!"};return Object(n.jsx)(I,{pageName:"contact",primaryImage:e,pageContent:""})},Y=t(33),q=(t(53),t.p+"static/media/explore-main.53e805e4.jpg"),z=function(){var e={image:q,description:"Coming soon!"};return Object(n.jsx)(I,{pageName:"explore",primaryImage:e,pageContent:""})},J=function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("h1",{children:" Members Login "})})},_=function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("h1",{children:" Heidi "})})},K=function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("h1",{children:" Wedding Anniversary "})})},V=function(){return Object(n.jsx)("div",{className:"page",children:Object(n.jsx)("h1",{children:" Monument "})})},Q=function(){return Object(n.jsxs)("div",{className:"aremores ".concat(Y.isMobile?" mobile ":""),children:[Object(n.jsx)(w,{}),Object(n.jsxs)(c.c,{children:[Object(n.jsx)(c.a,{exact:!0,path:"".concat(h.aboutUs),component:S}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(m.pineLodge),component:F}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(m.pineCone),component:G}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(m.reservations),component:H}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(h.explore),component:z}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(h.contact),component:D}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(b.membersLogin),component:J}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(b.heidi),component:_}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(b.weddingAnniversity),component:K}),Object(n.jsx)(c.a,{exact:!0,path:"".concat(b.monument),component:V})]})]})},X=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,o=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),o(e),r(e)}))},Z=t(18);s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(Z.a,{children:Object(n.jsx)(Q,{})})}),document.getElementById("root")),X()}},[[54,1,2]]]);
//# sourceMappingURL=main.1920fce5.chunk.js.map