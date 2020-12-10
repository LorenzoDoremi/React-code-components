This gallery is a more intricated example of nested routing and framer motion applied to a gallery. 
Since it's based on nesting, it can't be used with exact paths. 

To call it, just do something like:

```
  <Route  path="/mygallerypage">
           <Masonry class={"masonry"} vertical={true} >
               <p src="pic1.jpg" h1="Frank Owo" mIndex="0"></p>
               <p src="pic2.jpg" h1="Angela Higgins" mIndex="1"></p>
               <p src="pic3.jpg" h1="Gottfreid" mIndex="2"> </p>
               <p src="pic4.jpg" h1="Alex Chen" mIndex="3"> </p>
               <p src="pic5.jpg" h1="Fank kohhol" mIndex="4"> </p>
               <p src="pic6.jpg" h1="Elise Dietrich" mIndex="5"></p>
               <p src="pic7.jpg" h1="Cristina Wu " mIndex="6"></p>
               <p src="pic3.jpg" h1="Cristina Wu " mIndex="7"></p>
             </Masonry>
        
          
           </Route>
           
         
```
