import { storage,Context } from "near-sdk-as";
export class greeting{
               
    getgreeting(accountId:string):string | null{
        return storage.get<string>(accountId,"greeting not available");

    }
               
               
    setgreeting(greeting:string):void{
        storage.set(Context.sender,greeting);

    }
}
