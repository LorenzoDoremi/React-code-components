Breadcrumb.js

this breadcrumb functional component can be called in any component wrapped in routers and routes. 

a "constraint" array can be passed as props, which gives the opportunity to eliminate unwanted links (except for home). en example is here provided:

suppose the actual location as 

"host/users/userlist/myuser"

and the component as 

<Breadcrumb constraint={[true,false]}

this will generate  home -> users -> myuser. 


userlist is gone (the first true referso to "users". Could be useful if you want to pass data inside match params, but not creating those particular pages.
Without constraints, the breadcrumb will generate every location. 



