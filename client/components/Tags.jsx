/* eslint-disable react/prop-types */
import React from 'react';

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
      <a href={`https://store.steampowered.com/tags/en/${tag}`}>{tag}</a>
    ));
    const tagsShort = tagsAll.slice(0, 4);
    return (
      <div>
        <h3>Popular user-defined tags for this product:</h3>
        <div id="tags-popular">
          { tagsShort }
        </div>
        <div>+</div>
        <div>
          { tagsAll }
        </div>

      </div>
    );
  }
}
