import React, { Component } from 'react';
import { Grid } from 'components/layout/grid/grid';
import { Row } from 'components/layout/grid/row/row';
import { Column } from 'components/layout/grid/column/column';
import { Image } from 'components/layout/image/image';
import PropTypes from 'prop-types';
import styles from './document-list.style.scss';
import { Button } from '../button/button';

export class DocumentList extends Component {
  static propTypes = {
    documents: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    documents: []
  };

  getDocuments() {
    const { documents } = this.props;

    return documents.map((document, index) => {
      const { description, file, image, name } = document;
      const onClick = () => window.open(file, '_blank');

      return (
        <Column widthMd={6} widthLg={4} className="margin--bottom display--flex" key={index}>
          <div className="border-radius--all color-background--white padding--all shadow--primary display--flex">
            <div className={styles.image}>
              <Image src={image} />
            </div>
            <div className={styles.content}>
              <h4>{name}</h4>
              <p>{description}</p>
              <Button style={{ width: '100%' }} color="secondary" onClick={onClick}>
                Download
              </Button>
            </div>
          </div>
        </Column>
      );
    });
  }

  render() {
    const documents = this.getDocuments();

    return (
      <Grid className={`${styles.root} padding--horizontal--none`}>
        <Row>{documents}</Row>
      </Grid>
    );
  }
}
