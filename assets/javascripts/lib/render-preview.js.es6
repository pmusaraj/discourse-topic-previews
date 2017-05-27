var renderUnboundPreview = function(thumbnails, params) {
  let previewUrl = thumbnails.retina ? (thumbnails.retina) : thumbnails;
	return '<img class="thumbnail" src="' + previewUrl + '"/>';
};

export default renderUnboundPreview;
