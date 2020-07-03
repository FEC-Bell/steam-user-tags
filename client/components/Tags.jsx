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
      <div>
        {tag}
      </div>
    ));
    const tagsShort = tagsAll.slice(0, 4);
    return (
      <div>
        <h3>Popular user-defined tags for this product:</h3>
        { tagsShort }
        <div>+</div>
        <div>
          <p />
          <div>Modal dialog:</div>
          <h1>VIEW AND EDIT TAGS FOR THIS PRODUCT</h1>
          <h3>
            Popular user-defined tags for this product:
            <span title="These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag's popularity on this product.">?</span>
          </h3>
          { tagsAll }
          <h3>Sign in</h3>
          Sign in to add your own tags to this product.
          <button type="submit">Sign In</button>
          <button type="submit">Close</button>
        </div>
      </div>
    );
  }
}
