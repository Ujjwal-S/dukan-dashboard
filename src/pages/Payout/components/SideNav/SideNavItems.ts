import HomeIcon from "../../../../assets/images/home.svg";
import OrdersIcon from "../../../../assets/images/orders.svg";
import ProductsIcon from "../../../../assets/images/products.svg";
import DeliveryIcon from "../../../../assets/images/delivery.svg";
import MarketingIcon from "../../../../assets/images/marketing.svg";
import AnalyticsIcon from "../../../../assets/images/analytics.svg";
import PaymentsIcon from "../../../../assets/images/payments.svg";
import ToolsIcon from "../../../../assets/images/tools.svg";
import DiscountsIcon from "../../../../assets/images/discounts.svg";
import AudienceIcon from "../../../../assets/images/audience.svg";
import AppearanceIcon from "../../../../assets/images/appearance.svg";
import PluginIcon from "../../../../assets/images/plugins.svg";

export type SideNavItemTitle =
    'Home' |
    'Orders' |
    'Products' |
    'Delivery' |
    'Marketing' |
    'Analytics' |
    'Payments' |
    'Tools' |
    'Discounts' |
    'Audience' |
    'Appearance' |
    'Plugins';

export type SideNavItem = {
    title: SideNavItemTitle;
    imgSrc: string;
};

export const SideNavItems: SideNavItem[] = [
    { title: 'Home', imgSrc: HomeIcon },
    { title: 'Orders', imgSrc: OrdersIcon },
    { title: 'Products', imgSrc: ProductsIcon },
    { title: 'Delivery', imgSrc: DeliveryIcon },
    { title: 'Marketing', imgSrc: MarketingIcon },
    { title: 'Analytics', imgSrc: AnalyticsIcon },
    { title: 'Payments', imgSrc: PaymentsIcon },
    { title: 'Tools', imgSrc: ToolsIcon },
    { title: 'Discounts', imgSrc: DiscountsIcon },
    { title: 'Audience', imgSrc: AudienceIcon },
    { title: 'Appearance', imgSrc: AppearanceIcon },
    { title: 'Plugins', imgSrc: PluginIcon },
];