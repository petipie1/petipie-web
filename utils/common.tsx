export const calculateCartTotal = (cartItems: any) => {
  let total = 0;
  Object.values(cartItems).forEach((item: any) => {
    const itemTotal = parseFloat(item.price);
    total += itemTotal * item.quantity;
  });
  return total;
};

export function diffInMinutesFromNow(date: string) {
  const lastOrderDate = new Date(date);
  const now = new Date();

  var diff = (now.getTime() - lastOrderDate.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

export const scroll = (url: string) => {
  const section = document.querySelector(`#${url}`);
  // section?.scrollIntoView({ behavior: 'smooth', block: 'start', });
  if (!section) return;
  const yCoordinate = section?.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -40;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export function randomString(length: number) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charLength = chars.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result.toLowerCase();
}

export function getCurrentDayPart(date: Date) {
  const currentHour = date.getHours();

  if (currentHour >= 7 && currentHour < 11) {
    return "morning";
  } else if (currentHour >= 11 && currentHour < 16) {
    return "lunch";
  } else if (currentHour >= 16 && currentHour < 19) {
    return "afternoon";
  } else {
    return "evening";
  }
}

export function getPromotionProducts(menu: any) {
  const currentDate = new Date();
  const partOfDay = getCurrentDayPart(currentDate);
  console.log("Getting promos for: ", partOfDay);

  const promotionProducts = menu.reduce((acc: any, category: any) => {
    const products = category.products.filter((product: any) =>
      product?.isPromotion && product?.times?.includes(partOfDay)
    );
    return acc.concat(products);
  }, []);

  return promotionProducts;
}
