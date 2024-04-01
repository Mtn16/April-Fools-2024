let b001 = 1
let b002 = 2
let b003 = 5
let b004 = 1
let b005 = 3
let b006 = 2
let b007 = 3
let b008 = 2    
let b009 = 4
let b010 = 1










let c101 = 2
let c102 = 3
let c103 = 1
let c104 = 2
let c105 = 1
let c106 = 3
let c107 = 1
let c108 = 1    
let c109 = 2
let c110 = 2










let d201 = 1
let d202 = 3
let d203 = 2
let d204 = 1
let d205 = 3
let d206 = 2
let d207 = 2
let d208 = 3    
let d209 = 1
let d210 = 5




let e301 = 2
let e302 = 2
let e303 = 4
let e304 = 1
let e305 = 2
let e306 = 5
let e307 = 1
let e308 = 2    
let e309 = 3
let e310 = 2








let f401 = 2
let f402 = 3
let f403 = 5
let f404 = 1
let f405 = 1
let f406 = 3
let f407 = 2
let f408 = 2    
let f409 = 1
let f410 = 2





let g501 = 1
let g502 = 5
let g503 = 1
let g504 = 2
let g505 = 1
let g506 = 3
let g507 = 2
let g508 = 3    
let g509 = 5
let g510 = 1




let h601 = 1
let h602 = 3
let h603 = 4
let h604 = 2
let h605 = 3
let h606 = 1
let h607 = 2
let h608 = 2    
let h609 = 1
let h610 = 3

function check(message, id, client){
    if(b001 == 0 && b002 == 0 && b003 == 0 && b004 == 0 && b005 == 0 && b006 == 0 && b007 == 0 && b008 == 0 && b009 == 0 && b010 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        b001 = 9999
    }
    if(c101 == 0 && c102 == 0 && c103 == 0 && c104 == 0 && c105 == 0 && c106 == 0 && c107 == 0 && c108 == 0 && c109 == 0 && c110 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        c101 = 9999
    }
    if(d201 == 0 && d202 == 0 && d203 == 0 && d204 == 0 && d205 == 0 && d206 == 0 && d207 == 0 && d208 == 0 && d209 == 0 && d210 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        d201 = 9999  
    }
    if(e301 == 0 && e302 == 0 && e303 == 0 && e304 == 0 && e305 == 0 && e306 == 0 && e307 == 0 && e308 == 0 && e309 == 0 && e310 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        e301 = 9999  
    }
    if(f401 == 0 && f402 == 0 && f403 == 0 && f404 == 0 && f405 == 0 && f406 == 0 && f407 == 0 && f408 == 0 && f409 == 0 && f410 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        f401 = 9999  
    }
    if(g501 == 0 && g502 == 0 && g503 == 0 && g504 == 0 && g505 == 0 && g506 == 0 && g507 == 0 && g508 == 0 && g509 == 0 && g510 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        g501 = 9999  
    }
    if(h601 == 0 && h602 == 0 && h603 == 0 && h604 == 0 && h605 == 0 && h606 == 0 && h607 == 0 && h608 == 0 && h609 == 0 && h610 == 0)
    {
        require("./RoundFinished").execute(message, id, client)
        h601 = 9999  
    }
}

function row0(id){
    switch (id) {
        case "b001":
            if (b001 == 0)
            {
                return 0
            } else {
                b001--
                return 1
            }
            break;

        case "b002":
            if (b002 == 0)
            {
                return 0
            } else {
                b002--
                return 1
            }
            break;

        case "b003":
            if (b003 == 0)
            {
                return 0
            } else {
                b003--
                return 1
            }
            break;
        case "b004":
            if (b004 == 0)
            {
                return 0
            } else {
                b004--
                return 1
            }
            break;
        case "b005":
            if (b005 == 0)
            {
                return 0
            } else {
                b005--
                return 1
            }
            break;
        case "b006":
            if (b006 == 0)
            {
                return 0
            } else {
                b006--
                return 1
            }
            break;
        case "b007":
            if (b007 == 0)
            {
                return 0
            } else {
                b007--
                return 1
            }
            break;
        case "b008":
            if (b008 == 0)
            {
                return 0
            } else {
                b008--
                return 1
            }
            break;
        case "b009":
            if (b009 == 0)
            {
                return 0
            } else {
                b009--
                return 1
            }
            break;
        case "b010":
            if (b010 == 0)
            {
                return 0
            } else {
                b010--
                return 1
            }
            break;
    }
}






function row1(id){
    switch (id) {
        case "c101":
            if (c101 == 0)
            {
                return 0
            } else {
                c101--
                return 1
            }
            break;

        case "c102":
            if (c102 == 0)
            {
                return 0
            } else {
                c102--
                return 1
            }
            break;

        case "c103":
            if (c103 == 0)
            {
                return 0
            } else {
                c103--
                return 1
            }
            break;
        case "c104":
            if (c104 == 0)
            {
                return 0
            } else {
                c104--
                return 1
            }
            break;
        case "c105":
            if (c105 == 0)
            {
                return 0
            } else {
                c105--
                return 1
            }
            break;
        case "c106":
            if (c106 == 0)
            {
                return 0
            } else {
                c106--
                return 1
            }
            break;
        case "c107":
            if (c107 == 0)
            {
                return 0
            } else {
                c107--
                return 1
            }
            break;
        case "c108":
            if (c108 == 0)
            {
                return 0
            } else {
                c108--
                return 1
            }
            break;
        case "c109":
            if (c109 == 0)
            {
                return 0
            } else {
                c109--
                return 1
            }
            break;
        case "c110":
            if (c110 == 0)
            {
                return 0
            } else {
                c110--
                return 1
            }
            break;
    }
}









function row2(id){
    switch (id) {
        case "d201":
            if (d201 == 0)
            {
                return 0
            } else {
                d201--
                return 1
            }
            break;

        case "d202":
            if (d202 == 0)
            {
                return 0
            } else {
                d202--
                return 1
            }
            break;

        case "d203":
            if (d203 == 0)
            {
                return 0
            } else {
                d203--
                return 1
            }
            break;
        case "d204":
            if (d204 == 0)
            {
                return 0
            } else {
                d204--
                return 1
            }
            break;
        case "d205":
            if (d205 == 0)
            {
                return 0
            } else {
                d205--
                return 1
            }
            break;
        case "d206":
            if (d206 == 0)
            {
                return 0
            } else {
                d206--
                return 1
            }
            break;
        case "d207":
            if (d207 == 0)
            {
                return 0
            } else {
                d207--
                return 1
            }
            break;
        case "d208":
            if (d208 == 0)
            {
                return 0
            } else {
                d208--
                return 1
            }
            break;
        case "d209":
            if (d209 == 0)
            {
                return 0
            } else {
                d209--
                return 1
            }
            break;
        case "d210":
            if (d210 == 0)
            {
                return 0
            } else {
                d210--
                return 1
            }
            break;
    }
}


















function row3(id){
    switch (id) {
        case "e301":
            if (e301 == 0)
            {
                return 0
            } else {
                e301--
                return 1
            }
            break;

        case "e302":
            if (e302 == 0)
            {
                return 0
            } else {
                e302--
                return 1
            }
            break;

        case "e303":
            if (e303 == 0)
            {
                return 0
            } else {
                e303--
                return 1
            }
            break;
        case "e304":
            if (e304 == 0)
            {
                return 0
            } else {
                e304--
                return 1
            }
            break;
        case "e305":
            if (e305 == 0)
            {
                return 0
            } else {
                e305--
                return 1
            }
            break;
        case "e306":
            if (e306 == 0)
            {
                return 0
            } else {
                e306--
                return 1
            }
            break;
        case "e307":
            if (e307 == 0)
            {
                return 0
            } else {
                e307--
                return 1
            }
            break;
        case "e308":
            if (e308 == 0)
            {
                return 0
            } else {
                e308--
                return 1
            }
            break;
        case "e309":
            if (e309 == 0)
            {
                return 0
            } else {
                e309--
                return 1
            }
            break;
        case "e310":
            if (e310 == 0)
            {
                return 0
            } else {
                e310--
                return 1
            }
            break;
    }
}






function row4(id){
    switch (id) {
        case "f401":
            if (f401 == 0)
            {
                return 0
            } else {
                f401--
                return 1
            }
            break;

        case "f402":
            if (f402 == 0)
            {
                return 0
            } else {
                f402--
                return 1
            }
            break;

        case "f403":
            if (f403 == 0)
            {
                return 0
            } else {
                f403--
                return 1
            }
            break;
        case "f404":
            if (f404 == 0)
            {
                return 0
            } else {
                f404--
                return 1
            }
            break;
        case "f405":
            if (f405 == 0)
            {
                return 0
            } else {
                f405--
                return 1
            }
            break;
        case "f406":
            if (f406 == 0)
            {
                return 0
            } else {
                f406--
                return 1
            }
            break;
        case "f407":
            if (f407 == 0)
            {
                return 0
            } else {
                f407--
                return 1
            }
            break;
        case "f408":
            if (f408 == 0)
            {
                return 0
            } else {
                f408--
                return 1
            }
            break;
        case "f409":
            if (f409 == 0)
            {
                return 0
            } else {
                f409--
                return 1
            }
            break;
        case "f410":
            if (f410 == 0)
            {
                return 0
            } else {
                f410--
                return 1
            }
            break;
    }
}













function row5(id){
    switch (id) {
        case "g501":
            if (g501 == 0)
            {
                return 0
            } else {
                g501--
                return 1
            }
            break;

        case "g502":
            if (g502 == 0)
            {
                return 0
            } else {
                g502--
                return 1
            }
            break;

        case "g503":
            if (g503 == 0)
            {
                return 0
            } else {
                g503--
                return 1
            }
            break;
        case "g504":
            if (g504 == 0)
            {
                return 0
            } else {
                g504--
                return 1
            }
            break;
        case "g505":
            if (g505 == 0)
            {
                return 0
            } else {
                g505--
                return 1
            }
            break;
        case "g506":
            if (g506 == 0)
            {
                return 0
            } else {
                g506--
                return 1
            }
            break;
        case "g507":
            if (g507 == 0)
            {
                return 0
            } else {
                g507--
                return 1
            }
            break;
        case "g508":
            if (g508 == 0)
            {
                return 0
            } else {
                g508--
                return 1
            }
            break;
        case "g509":
            if (g509 == 0)
            {
                return 0
            } else {
                g509--
                return 1
            }
            break;
        case "g510":
            if (g510 == 0)
            {
                return 0
            } else {
                g510--
                return 1
            }
            break;
    }
}















function row6(id){
    switch (id) {
        case "h601":
            if (h601 == 0)
            {
                return 0
            } else {
                h601--
                return 1
            }
            break;

        case "h602":
            if (h602 == 0)
            {
                return 0
            } else {
                h602--
                return 1
            }
            break;

        case "h603":
            if (h603 == 0)
            {
                return 0
            } else {
                h603--
                return 1
            }
            break;
        case "h604":
            if (h604 == 0)
            {
                return 0
            } else {
                h604--
                return 1
            }
            break;
        case "h605":
            if (h605 == 0)
            {
                return 0
            } else {
                h605--
                return 1
            }
            break;
        case "h606":
            if (h606 == 0)
            {
                return 0
            } else {
                h606--
                return 1
            }
            break;
        case "h607":
            if (h607 == 0)
            {
                return 0
            } else {
                h607--
                return 1
            }
            break;
        case "h608":
            if (h608 == 0)
            {
                return 0
            } else {
                h608--
                return 1
            }
            break;
        case "h609":
            if (h609 == 0)
            {
                return 0
            } else {
                h609--
                return 1
            }
            break;
        case "h610":
            if (h610 == 0)
            {
                return 0
            } else {
                h610--
                return 1
            }
            break;
    }
}

module.exports = {
    check,
    row0,
    row1,
    row2,
    row3,
    row4,
    row5,
    row6
}