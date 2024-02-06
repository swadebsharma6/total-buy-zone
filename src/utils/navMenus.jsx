import { NavLink } from "react-router-dom";

export const menus = <>
<li>
<NavLink
  to="/shop"
  className={({ isActive}) => isActive ? "font-bold text-orange-600" : "" }>
  Shop
</NavLink>
</li>
<li>
<NavLink
  to="/orders"
  className={({ isActive}) => isActive ? "font-bold text-orange-600" : "" }>
 Orders
</NavLink>
</li>
<li>
<NavLink
  to="/manage"
  className={({ isActive}) => isActive ? "font-bold text-orange-600" : "" }>
  Manage Inventory
</NavLink>
</li>


</>