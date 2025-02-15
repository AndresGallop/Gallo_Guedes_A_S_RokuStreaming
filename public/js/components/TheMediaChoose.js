export default {
    name: "theMediaChoose",

    props: ['liveuser','currentuser'],
    

	template: `
        <section class="media_selector_wrapper">
            <div class="media_selector_item adl_tv" @click="gotvshows">
                <div class="media_selector_item_content">
                    <h1>TV</h1>

                </div>
            </div>
            <div class="media_selector_item adl_movies" @click="gohome">
                <div class="media_selector_item_content">
                    <h1>MOVIES</h1>
                </div>
            </div>
            <div class="media_selector_item adl_music" @click="gomusic">
                <div class="media_selector_item_content">
                    <h1>MUSIC</h1>
                </div>
            </div>
        </section>
	`,


created: function() {

    // this.loadMedia(null, 'movies' );
    // debugger;
    this.$emit('setuser', this.currentuser);

},

methods: {
gohome() {
    this.$router.push({ name: "home"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},

gomusic() {
    this.$router.push({ name: "music"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},

gotvshows() {
    this.$router.push({ name: "tvshows"});
   // window.localStorage.setItem('cacheduser', JSON.stringify(this.liveuser));
    
},


}
}