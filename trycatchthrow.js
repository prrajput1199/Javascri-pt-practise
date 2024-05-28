function fun(a, b) {
  try {
    if (b == 0) {
      throw new Error("can't be divided by 0");
    } else {
      console.log(a / b);
    }
  } catch (err) {
    console.log(err.message);
  }
}

fun(23, 0);
