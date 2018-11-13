new Vue({
	el :'#app',
	data : {
		nomber1:'',
		nomber2:'',
		reseultat:'Resultat'
	},
	methods :{
		addition(){
			return this.reseultat=Number( (parseInt(this.nomber1))+(parseInt(this.nomber2)));
		},
		soustraction(){
			return this.reseultat=Number( (parseInt(this.nomber1))-(parseInt(this.nomber2)));
		},
		division(){
			if(this.nomber1 == 0 ||this.nomber2==0 )
			{ alert('Faux Reseultat');}
			else
			{return this.reseultat=Math.round(Number( (parseInt(this.nomber1))/(parseInt(this.nomber2))));}
		},
		multiplication(){
			return this.reseultat=Number( (parseInt(this.nomber1))*(parseInt(this.nomber2)));
		},
		reset(){
			this.reseultat='Resultat';
			this.nomber1='';
			this.nomber2='';
		}
		
	}
	});