import { UICategory } from './uiCategory.js'
import { Item } from '../model/item.js'

const IMAGES_URL = new URL('../../img/', import.meta.url).href;

export const Categories : Array<UICategory> = [
    new UICategory('All', `${IMAGES_URL}ic-all.png`),
    new UICategory('Consumables', `${IMAGES_URL}ic-consumable.png`,
        <Item>{ type: "CONS" }),
    new UICategory('Arms', `${IMAGES_URL}ic-arm.png`,
        <Item>{ type: "EQUIP", equipType: "ARM" }),
    new UICategory('Head', `${IMAGES_URL}ic-head.png`,
        <Item>{ type: "EQUIP", equipType: "HEAD" }),
    new UICategory('Torso', `${IMAGES_URL}ic-torso.png`,
        <Item>{ type: "EQUIP", equipType: "TORSO" }),
    new UICategory('Legs', `${IMAGES_URL}ic-legs.png`,
        <Item>{ type: "EQUIP", equipType: "FEET" }),
    new UICategory('Trade', `${IMAGES_URL}ic-trade.png`,
        <Item>{ type: "TRADE" }),
    new UICategory('Valuables', `${IMAGES_URL}ic-valuables.png`,
        <Item>{ type: "KEY" })
]
