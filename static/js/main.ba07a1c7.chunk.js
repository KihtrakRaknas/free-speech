(this.webpackJsonpfreespeech=this.webpackJsonpfreespeech||[]).push([[0],{31:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(1),o=s.n(n),a=s(10),r=s(6),c=s(3),l=s(7),h=s(16),d=s(17),m=s(20),p=s(19),u=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(e){var i;return Object(h.a)(this,s),(i=t.call(this,e)).scrolled=function(){i.setState({alpha:window.scrollY/window.innerHeight})},console.log("NEW"),i.state={alpha:window.scrollY/window.innerHeight},i}return Object(d.a)(s,[{key:"componentWillReceiveProps",value:function(e){console.log(e.active+" - "+this.props.active),this.setState({alpha:window.scrollY/window.innerHeight})}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrolled)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrolled)}},{key:"render",value:function(){return console.log(this.props.active),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[!1,Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark",style:{backgroundColor:"rgba(0,0,0,"+this.state.alpha+")"},children:[Object(i.jsx)("a",{className:"navbar-brand",children:"Free Speech On The Web"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(i.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/","data-tip":"Background info + intro to main viewpoints",className:"nav-item nav-link ".concat("Home"==this.props.active?"active":""),children:"Intro"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/the-people",className:"nav-item nav-link ".concat("the-people"==this.props.active?"active":""),class:"nav-link","data-tip":"People need to demand better protection on social media",children:"The People"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/the-companies",className:"nav-item nav-link ".concat("the-companies"==this.props.active?"active":""),"data-tip":"Social media companies must take action",children:"The Companies"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/the-government",className:"nav-item nav-link ".concat("the-government"==this.props.active?"active":""),"data-tip":"The government must take action",children:"The Government"})}),Object(i.jsx)("li",{class:"nav-item",children:Object(i.jsx)(r.b,{to:"/further-reading",className:"nav-item nav-link ".concat("further-reading"==this.props.active?"active":""),"data-tip":"Sources you can read for more info",children:"Further Reading"})})]})})]})]}),Object(i.jsx)(l.a,{backgroundColor:"blue"})]})}}]),s}(o.a.Component),b=s(14),j=function(e){var t=Object(n.useState)(!1),s=Object(b.a)(t,2),o=s[0],a=s[1],c=Object(n.useState)({x:0,y:0}),l=Object(b.a)(c,2),h=l[0],d=l[1],m=function(e){d({x:e.clientX+20,y:window.innerHeight/2>e.clientY?e.clientY+20:e.clientY-u-20})},p=e.width?e.width:500,u=e.noIFrame?0:e.height?e.height:500,j=!!e.noIFrame&&e.noIFrame;return Object(i.jsxs)(i.Fragment,{children:[e.sameSite?Object(i.jsx)(r.b,{to:e.href,onMouseMove:m.bind(this),onMouseOver:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.noDec?{textDecoration:"none"}:{textDecoration:"underline",textDecorationColor:"blue",color:"blue"},children:e.children}):Object(i.jsx)("a",{href:e.href,onMouseMove:m.bind(this),onMouseOver:function(){return a(!0)},onMouseLeave:function(){return a(!1)},style:e.noDec?{textDecoration:"none"}:{textDecoration:"underline",textDecorationColor:"blue",color:"blue"},target:"_blank",rel:"noopener noreferrer",children:e.children}),Object(i.jsxs)("div",{style:{display:o?"block":"none",width:p,position:"fixed",zIndex:9999,top:h.y,left:h.x,borderRadius:10,backgroundColor:"#dbdbdb",border:"solid",borderWidth:0,padding:0,margin:0},children:[Object(i.jsx)("p",{style:{textAlign:"center",padding:0,margin:0},children:e.text}),j||window.location.href.includes("preview=true")||"ReactSnap"==window.navigator.userAgent?null:Object(i.jsx)("iframe",{loading:"lazy",scrolling:"no",src:e.sameSite?"/free-speech"+e.href+"?preview=true":e.href,style:{borderRadius:10,border:"none",padding:0,margin:0,overflow:"hidden!important",zIndex:9999,position:"relative"},width:p-0,height:u-0})]})]})},g=function(e){return Number(e.level)&&0==Number(e.level)||0==e.level?Object(i.jsx)("h1",{className:"display-4 text-center",children:e.children}):Number(e.level)&&1==Number(e.level)||1==e.level?Object(i.jsx)("h1",{children:e.children}):Number(e.level)&&2==Number(e.level)||2==e.level?Object(i.jsx)("h2",{children:e.children}):Number(e.level)&&3==Number(e.level)||3==e.level?Object(i.jsx)("h3",{children:e.children}):Number(e.level)&&4==Number(e.level)||4==e.level?Object(i.jsx)("h4",{children:e.children}):Object(i.jsx)("h2",{children:e.children})},w=function(e){return Object(i.jsx)("p",{children:e.children})},f=function(e){return Object(i.jsx)("small",{children:e.children})},v=function(e){return Object(i.jsx)("div",{style:{width:"100%",borderRadius:10},children:Object(i.jsxs)(j,{noDec:!0,noIFrame:!0,href:e.site,target:"_blank",rel:"noopener noreferrer",children:[Object(i.jsx)("img",{src:e.src,style:{width:"100%",borderRadius:10}}),Object(i.jsx)(f,{children:(e.desc?"".concat(e.desc):"")+(e.siteName?"Image courtesy of ".concat(e.siteName):"")})]})})};function x(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/00000211_5.png",site:"https://stacker.com/stories/3285/how-americans-use-internet-today-numbers",siteName:"Stacker.com"})}),Object(i.jsxs)("div",{className:"col-8",children:[Object(i.jsx)(g,{level:1,children:"Americans and the internet"}),Object(i.jsxs)(w,{children:["If you are reading this, then you probably understand what the internet is and how to use it. You're not alone in this, according to the Pew Research Center, ",Object(i.jsx)(j,{href:"https://www.pewresearch.org/internet/fact-sheet/internet-broadband/",children:"90% of Americans use the internet in 2019"}),". Perhaps most relevant to the issue, the Pew Research Center also found that in 2018 ",Object(i.jsx)(j,{href:"https://www.pewresearch.org/fact-tank/2019/09/11/key-findings-about-the-online-news-landscape-in-america/",children:"\u201cone-in-five adults said they often get news on social media.\u201d"})," Both these statistics have risen from previous years and a trend is clear, the internet is playing an increasingly large role in the lives of Americans."]})]})]}),Object(i.jsx)(g,{children:"The issue"}),Object(i.jsx)(w,{children:"The internet is being used. What's the big deal? The internet is still relatively new and the legal system is not currently equipped to handle free speech violations. Free speech regulations were created in a time where all impactful speech was done physically in public places. The only thing with the means to censor an individual was the government. Today, things have changed. We now gather on publicly accessible websites to express our views. Unlike their physical counterparts, these websites are privately owned and immune to most free speech protections."}),Object(i.jsx)(g,{level:1,children:"Free speech concerns:"}),Object(i.jsx)(g,{level:4,children:"Community Guideline Violations"}),Object(i.jsx)(w,{children:"Community Guidelines detail the types of content that can be posted to a given site. As these sites are private, they can pick and choose exactly what kind of content they will allow their users to share. These companies can update their community guidelines at any time and censor any kind of speech for violations."}),Object(i.jsx)(g,{level:4,children:Object(i.jsx)("kbd",{children:"\u201cShadow Banning\u201d"})}),Object(i.jsxs)(w,{children:["You may have heard the term \u201cshadow ban\u201d ",Object(i.jsx)(j,{href:"https://www.cnet.com/news/shadow-banning-what-it-is-and-what-its-not/",noIFrame:!0,text:"CNN article about shadow banning. Specifically, Trump's claims that Twitter was shadow banning republicans.",children:"recently"}),". A shadow ban is a relatively new form of censorship that has arisen from social media sites. The basic idea is that your content won't be shown to an audience. The content will still exist on site, it simply won't be recommended to other users, even those who follow/subscribe to you. This all happens algorithmically so it is very difficult to prove this or rectify. Sites often shadow ban people who share views that the company does not want to be associated with or that the company does not approve of."]}),Object(i.jsx)(g,{level:2,children:"Things are in flux"}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsxs)(w,{children:["Freedom of speech on social media platforms is currently under public scrutiny. Many conservatives voiced concerns over the apparent censorship of right-leaning views on major platforms. At the same time, democrats claim that ",Object(i.jsx)(j,{href:"https://www.nytimes.com/2020/10/12/technology/on-facebook-misinformation-is-more-popular-now-than-in-2016.html",children:"misinformation on social media"})," played a role in the 2016 election. Earlier this year, President ",Object(i.jsx)(j,{href:"https://www.theverge.com/2020/5/28/21273822/trump-signs-executive-order-facebook-twitter-section-230-social-media-companies",noIFrame:!0,text:'Article from The Verge titled "Donald Trump signs executive order targeting social media companies"',children:"Trump signed an executive order concerning speech on Twitter"}),". Things are changing and it\u2019s now more important than ever to sort out who should be responsible for regulating speech on the internet."]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://s.abcnews.com/images/Politics/trump-tax2-rt-ml-171222_16x9_1600.jpg",site:"https://abcnews.go.com/Politics/president-trump-signs-tax-bill-law-leaving-holidays/story?id=51954035",siteName:"abcnews.com"})})]}),Object(i.jsx)(g,{level:2,children:"Who should do something about it?"}),Object(i.jsx)(w,{children:"This is the million-dollar question. The 3 major viewpoints this site will be addressing are:"}),Object(i.jsx)(g,{level:4,children:Object(i.jsx)(j,{href:"/the-people",sameSite:!0,text:'Go to "The People" viewpoint on this site',children:"The People"})}),Object(i.jsx)(w,{children:"Poor speech protections on social media is a reflection of the will of their users."}),Object(i.jsx)(g,{level:4,children:Object(i.jsx)(j,{href:"/the-companies",sameSite:!0,text:'Go to "The Companies" viewpoint on this site',children:"The Companies"})}),Object(i.jsx)(w,{children:"We need social media giants to institute policies that protect speech on their platforms."}),Object(i.jsx)(g,{level:4,children:Object(i.jsx)(j,{href:"/the-government",sameSite:!0,text:'Go to "The Government" viewpoint on this site',children:"The Government"})}),Object(i.jsx)(w,{children:"We need regulation explicitly granting freedom of speech protections to users on social media sites."})]})}var O=function(e){return Object(i.jsx)("p",{style:{fontFamily:"Times New Roman",marginLeft:"40px",textIndent:"-40px"},children:e.children})},y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{children:"Bechtold, Eliza. \u201cTerrorism, the Internet, and the Threat to Freedom of Expression: The Regulation of Digital Intermediaries in Europe and the United States.\u201d Journal of Media Law, vol. 12, no. 1, July 2020, pp. 13\u201346. EBSCOhost, doi:10.1080/17577632.2020.1760474."}),Object(i.jsx)(O,{children:"Bohanon, Alysha L. \u201cTweeting the Police: Balancing Free Speech and Decency on Government-Sponsored Social Media Pages.\u201d Minnesota Law Review, vol. 101, no. 1, Nov. 2016, pp. 341\u2013382. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=119657058&site=ehost-live."}),Object(i.jsx)(O,{children:"DeNardis, L., and A. M. Hackl. \u201cInternet Governance by Social Media Platforms.\u201d Telecommunications Policy, vol. 39, no. 9, Oct. 2015, pp. 761\u2013770. EBSCOhost, doi:10.1016/j.telpol.2015.04.003."}),Object(i.jsx)(O,{children:"Everett, Colby M. \u201cFree Speech on Privately-Owned Fora: A Discussion on Speech Freedoms and Policy for Social Media.\u201d Kansas Journal of Law & Public Policy, vol. 28, no. 1, Fall 2018, pp. 113\u2013145. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=133597714&site=ehost-live."}),Object(i.jsx)(O,{children:"Grefrath, Liz. \u201c#LosingTheThread: RECOGNIZING ASSEMBLY RIGHTS IN THE NEW PUBLIC FORUM.\u201d Brooklyn Law Review, vol. 85, no. 1, Fall 2019, pp. 217\u2013256. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=141522687&site=ehost-live."}),Object(i.jsx)(O,{children:"Jaffe, Andrei Gribakov. \u201cDigital Shopping Malls and State Constitutions -- a New Font of Free Speech Rights?\u201d Harvard Journal of Law & Technology, vol. 33, no. 1, Fall 2019, pp. 269\u2013291. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=142243761&site=ehost-live."}),Object(i.jsx)(O,{children:"McIntosh, Daniel. \u201cWe Need to Talk about Data: How Digital Monopolies Arise and Why They Have Power and Influence.\u201d Journal of Technology Law & Policy, vol. 23, no. 2, July 2019, pp. 185\u2013213. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=141016368&site=ehost-live."}),Object(i.jsx)(O,{children:"Mou, Yi, et al. \u201cUnderstanding the Use of Circumvention Tools to Bypass Online Censorship.\u201d New Media & Society, vol. 18, no. 5, May 2016, pp. 837\u2013856. EBSCOhost, doi:10.1177/1461444814548994."}),Object(i.jsx)(O,{children:"Plemons, Nathaniel. \u201cWeeding Out Wolves: Protecting Speakers and Punishing Pirates in Unmasking Analyses.\u201d Vanderbilt Journal of Entertainment & Technology Law, vol. 22, no. 1, Fall 2019, pp. 181\u2013214. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=141872300&site=ehost-live."}),Object(i.jsx)(O,{children:"Tim Wu. \u201cIs the First Amendment Obsolete?\u201d Michigan Law Review, vol. 117, no. 3, Dec. 2018, pp. 547\u2013581. EBSCOhost, search.ebscohost.com/login.aspx?direct=true&db=asn&AN=133395645&site=ehost-live."})]})},k=function(e){var t=e.height?e.height:null;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("header",{class:"masthead",style:{backgroundImage:"url('".concat(e.imgSrc,"')"),height:t},children:[Object(i.jsx)("div",{class:"overlay"}),Object(i.jsx)("div",{class:"container",children:Object(i.jsx)("div",{class:"row",children:Object(i.jsx)("div",{class:"col-lg-8 col-md-10 mx-auto",children:Object(i.jsxs)("div",{class:"post-heading",style:{marginBottom:"3p"},children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("h2",{class:"subheading",children:e.subtitle})]})})})})]}),Object(i.jsx)("div",{class:"container",style:{marginTop:"-50px",marginBottom:"50px"},children:Object(i.jsx)("div",{class:"row",children:Object(i.jsx)("div",{class:"col-lg-8 col-md-10 mx-auto",children:Object(i.jsxs)(f,{children:["Banner image courtesy of ",Object(i.jsx)("em",{children:Object(i.jsx)(j,{noDec:!0,noIFrame:!0,href:e.src,children:e.srcName})})]})})})})]})},N=function(e){return Object(i.jsx)("p",{className:"text-center",style:{marginRight:50,marginLeft:50},children:Object(i.jsx)("em",{children:e.children})})},T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://static.dw.com/image/43286160_304.png",site:"https://www.dw.com/en/washington-sues-facebook-over-cambridge-analytica-scandal/a-46811290",siteName:"dw.com"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsxs)(w,{style:{marginTop:0},children:["The Facebook\u2013Cambridge Analytica data scandal was a prime example of how people shape the policies of social media sites. After the scandal, the ",Object(i.jsx)(j,{href:"https://twitter.com/hashtag/deletefacebook?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Ehashtag",noIFrame:!0,text:"Twitter link for #DeleteFacebok",children:"#DeleteFacebook"})," hashtag was trending and Facebook users demanded change. As a result, Facebook made numerous changes, which were documented in this ",Object(i.jsx)(j,{href:"https://techcrunch.com/2018/04/10/how-facebook-has-reacted-since-the-data-misuse-scandal-broke/",children:"TechCrunch article"}),". These measures included making privacy settings easier to modify, certifying marketer on the platform, informing users whose data was misused and gauging their impact on politics. Clearly, Facebook heard the complaints of its users and changed for the better."]})})]}),Object(i.jsx)(w,{children:"Another thing to note is, social media sites are fundamentally different from public spaces and shouldn\u2019t have the same required protections. If I would like to spread political information in person, my only practical option might be a public space and thus it makes sense to provide protections in those places. However, on the internet, there is no limit to the sites I can use to express my opinion. Even if you are somehow shut away from every single site on the internet. You could always just create your own. The internet has virtually no barrier to entry and therefore will provide a way in which you can express your views."}),Object(i.jsx)(N,{children:"The founding fathers knew what they were doing."}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)(w,{children:"The founding fathers rightly limited the scope of the first amendment to only protect individuals from the government. They worded the first amendment to allow a private entity to moderate its own content. In their time, a prime example would be a newspaper publisher choosing which pieces get published. Various publishers would have various policies on what they allowed. If a given author had an issue with their current publisher\u2019s policies, they could always switch publishers."})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://media.nationalgeographic.org/assets/photos/138/127/67ea52ea-9756-4a44-ae02-d398261084df.jpg",site:"https://www.nationalgeographic.org/article/founding-fathers/",siteName:"nationalgeographic.org"})})]}),Object(i.jsxs)(w,{children:["This system continues to work for modern-day publishers. Take a major publisher like Penguin Random House as an example, they heavily emphasize their ",Object(i.jsx)(j,{href:"https://authornews.penguinrandomhouse.com/protecting-our-authors-right-to-freedom-of-speech-and-expression/",children:"commitment"})," to protecting their author\u2019s freedom of speech rights. Clearly, our current system reflects the will of the authors."]}),Object(i.jsx)(w,{children:"The internet functions similarly, with a social media site dictating what can and cannot be published on their service. If any problems regarding free speech on a platform exist, it is because the authors (the \u201cusers\u201d in this case) did not take issue with it. If better free speech protections are demanded by consumers, then better free speech protections will be granted by the large social media companies."})]})},S=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(w,{children:["In order to understand why it is helpful to look at a close physical analog to social media: newspapers. Newspaper publishers are protected by the first amendment\u2019s \u201cFreedom of the press\u201d cause and can publish anything they want to. However, a key thing to note is that they can still be held liable for their content. That is why someone like ",Object(i.jsx)(j,{href:"https://www.cbc.ca/news/entertainment/judge-rule-monday-johnny-depp-libel-case-1.5778460",children:"Johnny Depp can sue a newspaper for libel"}),". Overall, this makes a great system, the news doesn\u2019t get censored but newspapers can still be held accountable."]}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"http://www.coreypadveen.com/wp-content/uploads/2015/10/COMP007.jpg",site:"http://www.coreypadveen.com/case-study-the-changing-landscape-of-news-and-media-outlets/",siteName:"coreypadveen.com"})}),Object(i.jsxs)("div",{className:"col-8",children:[Object(i.jsx)(N,{children:"Social media sites are not newspapers."}),Object(i.jsxs)(w,{children:["The issue is, this system breaks down if it is used for social media sites. This would turn every social media site into a publisher and make them responsible for anything their users post. While it might make sense to punish a platform for allowing certain content to be posted (think Napster), it would also require platforms to check every piece of content that enters their site. If we look at YouTube as an example, with its ",Object(i.jsx)(j,{href:"https://www.statista.com/statistics/259477/hours-of-video-uploaded-to-youtube-every-minute/",noIFrame:!0,text:'An article from statista titled "Hours of video uploaded to YouTube every minute as of May 2019"',children:"500 hours of video uploaded every minute"}),". It's clear that it would be impossible for social media sites to do this."]})]})]}),Object(i.jsxs)(w,{children:["It was for this reason that Section 230 of the Communications Decency Act was written. It says that ",Object(i.jsx)(j,{href:"https://www.eff.org/issues/cda230",noIFrame:!0,text:'Article from the Electionic Frontier Foundation titled "Section 230 of the Communications Decency Act"',children:'"No provider or user of an interactive computer service shall be treated as the publisher or speaker of any information provided by another information content provider."'})," This wording made social media companies exempt from liability over user-generated content and avoided the problems described above."]}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsxs)(w,{children:["With this legal freedom, social media companies designed content reporting systems for false information. Some companies like YouTube even worked out deals with music publishers to ",Object(i.jsx)(j,{href:"https://support.google.com/youtube/answer/2797370?hl=en",noIFrame:!0,text:"Google's support page for YouTube's \"Content ID\" feature",children:"settle copyright disputes"})," out of court. It's clear that the industry is more than capable of regulating itself and it functions best when the government is uninvolved. The fast-paced always changing nature of the internet is just not compatible with the slow-moving and static legal system. As the meme rightly claims, ",Object(i.jsx)("strong",{children:"modern problems require modern solutions"}),". We need to leave protecting freedom of speech in the hands of companies. If their customers want free speech, the social media giants will respond with innovative and effective solutions."]})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://i.kym-cdn.com/photos/images/newsfeed/001/697/798/be2.jpg",site:"https://knowyourmeme.com/photos/1697798-modern-problems-require-modern-solutions",siteName:"knowyourmeme.com"})})]})]})},F=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(w,{children:["There isn\u2019t any pressure on the existing social media giants to protect freedom of speech. This is because their users don\u2019t have many viable alternatives to their sites. Unlike traditional monopolies where a single company controls the market by buying their competition, social media companies enjoy a monopoly due to something called the ",Object(i.jsx)(j,{href:"https://marketbusinessnews.com/financial-glossary/network-effect-definition-meaning/",children:Object(i.jsx)("strong",{children:"networking effect"})}),"."]}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://newventurist.com/wp-content/uploads/2015/10/network-effect.jpg",site:"http://newventurist.com/2015/10/networking-what-how-who-and-where-post-10-of-startup-briefs/",siteName:"newventurist.com"})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)(w,{children:"The networking effect is especially the idea that the more people use a product, the more inherent value it has. In other words, as something becomes popular, the better that thing becomes. Social media sites are fundamentally dependent on the networking effect."})})]}),Object(i.jsx)(N,{children:"You wouldn\u2019t join a social network site that none of your friends were using."}),Object(i.jsxs)(w,{children:["For social media sites to offer value, they need to connect you to the people who you want to connect to. A giant like Facebook has no problem doing this with its self reported ",Object(i.jsx)(j,{href:"https://www.statista.com/statistics/264810/number-of-monthly-active-facebook-users-worldwide/",noIFrame:!0,text:'An article from statista titled "Number of monthly active Facebook users worldwide as of 2nd quarter 2020"',children:"2.7 billion users"}),". On the flip side, any new potential sites, no matter how they innovate and compete, must face the near-impossible task of convincing people to join a network with no one on it."]}),Object(i.jsx)(w,{children:"This creates an environment where we only have a few major players in the social media space. Ultimately this results in the companies being able to ignore the will of their customers and instead focus on maximizing profits. They have no reason to go out of their way to protect their user\u2019s speech."}),Object(i.jsxs)("div",{class:"row",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)(w,{children:"Antitrust laws don\u2019t make sense when applied to social media companies as they aren\u2019t engaging in any inherently illegal business practices. This means that we are stuck with our existing social media monopolies. Because the free market can\u2019t regulate these companies, we must turn to the government to regulate them. Government regulation is our only realistic option to protect freedom of speech on the internet."})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{src:"https://images.wsj.net/im-217401?width=1280&size=1",site:"https://www.wsj.com/articles/antitrust-cant-bust-a-monopoly-of-ideas-11596643591",siteName:"wsj.com"})})]})]})};var I=Object(c.e)((function(e){e.match;var t,s=e.location;e.history;return console.log(s.pathname,s.state),Object(i.jsx)(u,{active:(t=s.pathname,t.length<=1?"Home":t.replace("/",""))})}));var C=function(){return Object(i.jsxs)(r.a,{basename:"/free-speech",children:[Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(I,{}),Object(i.jsx)(c.a,{exact:!0,path:"/",component:function(){return Object(i.jsx)(k,{imgSrc:"img/pointing.jpg",srcName:"The Jury Box Blog",src:"http://juryboxblog.blogspot.com/2010/11/tragedy-hindsight-bias-and-blame-game.html",title:"The Lack of Freedom of Speech On The Internet",subtitle:"Who is responsible?"})}}),Object(i.jsx)(c.a,{exact:!0,path:"/the-people",component:function(){return Object(i.jsx)(k,{imgSrc:"img/users.png",srcName:"Rietveld ICT",src:"https://rietveld-ict.nl/how-to-get-a-list-of-specified-users-and-their-group-membership-from-active-directory/",title:"The People",subtitle:"Social media sites with poor free speech protections are a reflection of the will of their users."})}}),Object(i.jsx)(c.a,{exact:!0,path:"/the-companies",component:function(){return Object(i.jsx)(k,{imgSrc:"img/social-media.jpg",srcName:"Fronetics",src:"https://www.fronetics.com/four-supply-chain-companies-that-excel-at-social-media/",title:"The Companies",subtitle:"Social Media Companies need to regulate themselves better."})}}),Object(i.jsx)(c.a,{exact:!0,path:"/the-government",component:function(){return Object(i.jsx)(k,{imgSrc:"img/government.jpg",srcName:"Fox Business",src:"https://www.foxbusiness.com/politics/the-government-is-rushing-to-spend-billions-heres-why",title:"The Government",subtitle:"The government should protect speech on the internet by instituting new regulations."})}}),Object(i.jsx)(c.a,{exact:!0,path:"/further-reading",component:function(){return Object(i.jsx)(k,{imgSrc:"img/reading.jpg",srcName:"Association For Psychological Science",src:"https://www.psychologicalscience.org/news/releases/speed-reading-promises-are-too-good-to-be-true-scientists-find.html",title:"Further Reading",subtitle:"Interested in the issue? Here are some scholarly sources you can use to conduct your own research!"})}}),Object(i.jsx)("article",{children:Object(i.jsx)("div",{class:"container-fluid",children:Object(i.jsx)("div",{class:"row",children:Object(i.jsxs)("div",{class:"col-lg-8 col-md-10 mx-auto",children:[Object(i.jsx)(c.a,{exact:!0,path:"/",component:x}),Object(i.jsx)(c.a,{path:"/the-people",component:T}),Object(i.jsx)(c.a,{path:"/the-companies",component:S}),Object(i.jsx)(c.a,{path:"/the-government",component:F}),Object(i.jsx)(c.a,{path:"/further-reading",component:y})]})})})}),Object(i.jsx)("hr",{}),Object(i.jsx)("footer",{children:Object(i.jsx)("div",{class:"container",children:Object(i.jsx)("div",{class:"row",children:Object(i.jsxs)("div",{class:"col-lg-8 col-md-10 mx-auto",children:[Object(i.jsxs)("ul",{class:"list-inline text-center",children:[Object(i.jsx)("li",{class:"list-inline-item",children:Object(i.jsx)(j,{noDec:!0,href:"https://kihtrak.com",width:500,height:500,children:Object(i.jsxs)("span",{class:"fa-stack fa-lg",children:[Object(i.jsx)("i",{class:"fas fa-circle fa-stack-2x"}),Object(i.jsx)("i",{class:"fas fa-user fa-stack-1x fa-inverse"})]})})}),Object(i.jsx)("li",{class:"list-inline-item",children:Object(i.jsx)("a",{href:"https://github.com/KihtrakRaknas/free-speech","data-tip":"View the code powering this website",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsxs)("span",{class:"fa-stack fa-lg",children:[Object(i.jsx)("i",{class:"fas fa-circle fa-stack-2x"}),Object(i.jsx)("i",{class:"fab fa-github fa-stack-1x fa-inverse"})]})})})]}),Object(i.jsx)("p",{class:"copyright text-muted",children:"Copyright \xa9 Karthik Sankar 2020"})]})})})})]}),Object(i.jsx)(l.a,{})]})},A=document.getElementById("root");A.hasChildNodes()?Object(a.hydrate)(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(C,{})}),A):Object(a.render)(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(C,{})}),A)}},[[31,1,2]]]);
//# sourceMappingURL=main.ba07a1c7.chunk.js.map