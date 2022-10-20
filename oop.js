function Orang(nama){

	this.nama = nama;
	
	this.sapa = function(nama){
		alert("Halo " + nama + ", nama saya " + this.nama);
	}
}