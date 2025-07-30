import ListItem from "./ListItem";

interface List{
    list:ListItem[],
    load():void,  //loads the list
    save():void,  //save the list
    clearList():void, //clear the list
    addItems(itemObj:ListItem):void, //add items
    removeItem(id:string):void
}

export default class FullList implements List{

    // instance of class
    static instance:FullList=new FullList();
    private constructor(private _list:ListItem[]=[]){}

    get list():ListItem[]{
        return this._list
    }

    load():void{

        // retrive the data from localstorage
        const storeList:string|null=localStorage.getItem("myList");
        if(typeof storeList !=='string') return
        
        // Parses it into array of plain objects
        const parsedList:{_id:string,_name:string,_checked:boolean}[]=JSON.parse(storeList)

        // go to each object(item) in the array and give store in newListItem variable
        parsedList.forEach(itemObj=>{
            const newListItem=new ListItem(itemObj._id,itemObj._name,itemObj._checked)

            // passing the newItemList to the FullList class
            FullList.instance.addItems(newListItem)
        })



    }
    // save method
    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list));
    }

    // clear list method
    clearList(): void {
        this._list=[]
        this.save();
    }

    addItems(itemObj:ListItem):void{
        this._list.push(itemObj);
        this.save();
    }

    removeItem(id: string): void {
       this._list=this._list.filter(item => item.id!==id);
       this
    }
}