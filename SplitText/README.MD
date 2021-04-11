An animated class for delayed overflowing word splitting based on framer-motion.
Be careful: Spaces will be automatically deleted. 

example
```
<h1>
  <SplitText
    text="FRIEDRICH"
    duration="0.5"
    stagger="0.02"
    initial={{ y: "10%", opacity: 1 }}
    exit={{ y: "100%"}}
    animate={{
        y: 0,
        opacity: 1,
       
     }
     }         
             />
</h1>
```
