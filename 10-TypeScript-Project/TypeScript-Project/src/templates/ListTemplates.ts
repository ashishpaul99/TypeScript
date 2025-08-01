import FullList from "../model/FullList";

interface DOMList{
    ul:HTMLUListElement,
    clear():void,
    render(fullList:FullList):void,
}

export default class ListTemplate implements DOMList{
    // pass ul as parameter
    ul:HTMLUListElement

    static instance:ListTemplate=new ListTemplate();

    private constructor(){
        this.ul=document.getElementById("listItems") as HTMLUListElement

    }
    clear():void{
        // it clears list on the DOM
        this.ul.innerHTML='';
    }

    render(fullList: FullList): void {
        // clear what we have intially
        this.clear()
        // go each item in fullList and create a list element
        fullList.list.forEach(item=>{
            const li=document.createElement('li') as HTMLLIElement;
            li.className="item";

            const check=document.createElement("input") as HTMLInputElement
            check.type="checkbox",
            check.id=item.id //getters and setters are used
            check.checked=item.checked
            li.append(check)

            // addEventListener to make checkbox check and uncheck
            check.addEventListener("change",()=>{
            
                item.checked=!item.checked
                fullList.save()
            })

            const label=document.createElement("label") as HTMLLabelElement
            label.htmlFor=item.id
            label.textContent=item.item
            li.append(label);

            const button=document.createElement("button") as HTMLButtonElement;
            button.className="button";
            button.textContent='X'
            li.append(button);

            // addEventListener is used to remove the items
            button.addEventListener("click",()=>{
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            // whole things added to unorder list
            this.ul.append(li);
        })
    }



}