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
