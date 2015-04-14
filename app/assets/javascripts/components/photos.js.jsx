var PhotoGallery = React.createClass({

 componentDidMount: function() {
   this.startSlide();
   setInterval(this.displayState, 100000);
 },

  displayState: function(){
    var datas =  ["http://farm8.static.flickr.com/7652/16529947963_00408106c5_b.jpg","http://farm8.static.flickr.com/7647/16942687277_f1dff0d2f7_b.jpg", "http://farm9.static.flickr.com/8794/16529869283_8ce4356244_b.jpg"]
    var newData = this.state.data.concat(datas);
    var reversed = newData.reverse();
    this.replaceState({data: reversed});
    this.startSlide();

  },

  getInitialState: function() {
    return ({
      data: this.props.flickrPhotos
   });
  },

  startSlide: function(){
    jQuery('.photosList').cycle({fx: 'fade', delay: -3000})
  },

  render: function(){
    return(
       <div> <PhotoList data={this.state.data} />
       </div>
    );
  }
});

var PhotoList = React.createClass({
  render: function() {
    var image = this.props.data.map(function(element, i) {
      return (
         <SinglePhoto imageURL={element} key={i}/>
      );

    });
    return (
      <div className="photosList">
        {image}
      </div>
     );
   }
});

var SinglePhoto = React.createClass({
  render: function() {
    return (
        <img className="photo fit img-responsive" src={this.props.imageURL}/>
    );
  }
});





