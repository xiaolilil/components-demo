import dayjs from 'dayjs'

export default function times(app){
    let formatString = "YYYY-MM-DD HH:mm:ss";

    app.directive("format-time", {
        created(el, bindings){
            console.log('bindings',bindings)
            if(bindings.value){
                formatString = bindings.value;
             }
        },
        mounted(el, bindings){
          
            const text = el.textContent;
            let timestamp = parseInt(text);
            if(timestamp == 10){
                timestamp = timestamp * 1000
            }
            el.textContent =  dayjs(timestamp).format(formatString); 
        }
    } )
}