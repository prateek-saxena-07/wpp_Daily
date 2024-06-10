function upper_lower(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  front_part = str.substring(0, 3).toLowerCase();
  back_part = str.substring(3, str.length);
  return front_part + back_part;
}
con;
