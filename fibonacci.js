function Fibonaci(n) {
	if (n <= 1)
		return n;
	return Fibonaci(n - 1) + Fibonaci(n - 2);
}