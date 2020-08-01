/* eslint-disable react/prop-types */
import React from 'react';
import './tags.scss';

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { tags: ['Game'] },
    };
  }

  componentDidMount() {
    const { game } = this.props;
    fetch(`/api/tags/${game}`)
      .then((response) => response.json())
      .then((json) => {
        if (json) this.setState({ data: json });
      });
  }

  render() {
    const { data } = this.state;
    const tagsAll = data.tags.map((tag) => (
      <div class="tag-wrap">
        <a href={`https://store.steampowered.com/tags/en/${tag}`}>{tag}</a>
      </div>
    ));
    const tagsShort = tagsAll.slice(0, 4);
    return (
      <div>
        <p>Popular user-defined tags for this product:</p>
        <div id="tags-popular">
          { tagsShort }
          <a id="tags-more" href="javascript: return;">+</a>
        </div>
        <div className="modal">
          <div className="modal-content">
            <div className="newmodal_header_border">
              <div className="newmodal_header">
                <div className="newmodal_close" />
                <div className="title_text">
                  View and edit tags for this product
                </div>
              </div>
            </div>
            { tagsAll }
          </div>
        </div>
      </div>
    );
  }
}
