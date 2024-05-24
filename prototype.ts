String.prototype["capitalize"] = function () {
  return `${this[0].toUpperCase()}${this.substring(1)}`;
};

String.prototype["onlyAlphabet"] = function () {
  if (!this) return "";
  return this.replace(/[^a-zA-Z]+/g, "") || "";
};

String.prototype["onlyAlphanumeric"] = function () {
  if (!this) return "";
  return this.replace(/[^a-zA-Z0-9]+/g, "") || "";
};
String.prototype["onlyNumber"] = function () {
  if (!this) return "";
  return this.replace(/\D/g, "") || "";
};

String.prototype["limitCharacter"] = function (limit: number) {
  if (!this) return "";
  return this.substring(0, limit);
};

String.prototype["limitDigit"] = function (limit: number) {
  if (!this) return "";
  const [integer, decimal] = this.split(".");
  if (limit === 0) return integer;
  if (decimal === undefined || decimal === null) return integer;
  return `${integer}.${decimal?.limitCharacter(limit)}`;
};

String.prototype["onlyNumberAndDot"] = function () {
  if (!this) return "";
  return this.replace(/[^0-9.]/g, "") || "";
};
