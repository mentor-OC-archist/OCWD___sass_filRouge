
        let index

        select.focus()

        for(index in jsonDatas){
            let opt = document.createElement('option')
            opt.value = index
            opt.innerHTML = index+": "+jsonDatas[index].h
            opt.data = jsonDatas[index]
            // console.log(opt.data);
            select.append(opt)
        }

        let s_array = Array.from(select.querySelectorAll('option'))
        if(document.location.hash != ""){
            for(let a in s_array)if("#"+s_array[a].value == document.location.hash){
                select.selectedIndex = a
                // console.log(a.value);
                // console.log('ok');
                select.onchange()
            }
        }
         
        function selectOnchange(that){
            // console.log(that);
            // alert(select.selectedIndex)
            // alert(select.childNodes[select.selectedIndex].value)
            // console.log(select.querySelectorAll('option')[select.selectedIndex]);
            let opt = select.querySelectorAll('option')[select.selectedIndex]
            // alert(opt.value)
            document.location.hash = select.value
            // console.log(select.value);

            iframe.src = "./_/"+select.value
            iframe_sass.src = "./_/"+that.value+"/sass/main.scss"
            iframe_css.src = "./_/"+select.value+"/public/css/style.css"

            h1.innerHTML = p.innerHTML = tasks_p.innerHTML = tasks_ol.innerHTML = ""
            h1.innerHTML = opt.data.h
            p.innerHTML = opt.data.p
            tasks_p.innerHTML = opt.data.tasks.p
            opt.data.tasks.ol.map((item) => { 
                let li = document.createElement('li')
                li.innerHTML = item
                li.style.width = window.innerWidth > 1000 
                    ? "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 2)) + "% - 1em)"
                    : "calc(" + (100 / Math.floor(opt.data.tasks.ol.length / 3)) + "% - 1em)"
                tasks_ol.append(li) 
            })

        }
        function move(smthg){
            if(typeof smthg == "undefined" && select.selectedIndex>1){
                select.selectedIndex = select.selectedIndex - 1
                select.onchange()
            }
            if(typeof smthg != "undefined" && select.selectedIndex<26){
                select.selectedIndex = select.selectedIndex + 1
                select.onchange()
            }
            // console.log(s_array);
            // console.log(s_array[select.selectedIndex]);
            // console.log(s_array[select.selectedIndex].value);
            document.location.hash = s_array[select.selectedIndex].value
        }
        document.querySelector("header>a:first-of-type").addEventListener('click', (e)=>{e.preventDefault();move();})
        document.querySelector("header>a:last-of-type").addEventListener('click', (e)=>{e.preventDefault();move(1);})