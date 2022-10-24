// import OrderItem model
import { OrderItem } from "./OrderItem";

export class Order {
    items: OrderItem[] = []
    status: 'active' | 'completed' = 'active'

    constructor(){}
}