class Ean13 {
    
    public checksum(_eanNumber) {
        var x = 0,
			y = 0,
			z = 0;

		for (var i = 0; i < 11; i += 2) {
			x += parseInt(_eanNumber.charAt(i));
		}

		for (var i = 1; i < 12; i += 2) {
			y += parseInt(_eanNumber.charAt(i));
		}

		z = 3 * y + x;
		z = (Math.ceil(z / 10) * 10) - z;	// zaokrąglanie w górę do...
											// najbliższej podzielnej przez 10
		return z;
    }

}