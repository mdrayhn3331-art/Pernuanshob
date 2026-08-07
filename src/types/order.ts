export interface Order {

id:string;

userId:string;

products:any[];

total:number;

paymentMethod:string;

transactionId:string;

paymentScreenshot:string;

status:
"Pending" |
"Approved" |
"Rejected";

createdAt:any;

}
