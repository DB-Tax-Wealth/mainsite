import React from 'react';
import { Screen } from 'components/screen/screen';
import styles from './splash.style.scss';

export const Splash = () => {
  return (
    <Screen className={styles.root}>
      <div className={styles.primary}>
        <h1>
          <strong>DB</strong>Tax
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, est porta tempus posuere, augue
          nulla tempor nisi, eget maximus enim metus quis nulla. Nunc eleifend felis ex, in molestie mi efficitur eu.
          Sed quis tortor nec orci viverra porttitor ac quis nisl. Nunc varius dolor lacus, sed rhoncus diam ultricies
          sed. Fusce mattis urna lacus, ut fringilla tellus congue in. Nulla condimentum erat at odio dictum mollis sed
          at urna. Pellentesque pulvinar nibh justo, vitae tincidunt neque tempus id.
        </p>

        <p>
          Nam tellus lectus, luctus ut risus eget, rhoncus varius dolor. Maecenas porta sem sed bibendum venenatis.
          Aenean laoreet augue quis neque tincidunt dignissim. Cras hendrerit, sem ut rutrum ultricies, nulla purus
          aliquam ante, vitae iaculis mi est non dui. Mauris non condimentum dui. Mauris cursus aliquam nisi, a
          tincidunt nisi euismod ut. Quisque vehicula, velit et rhoncus consequat, dolor neque accumsan libero, at
          suscipit nunc arcu id odio.
        </p>

        <p>
          In a dignissim ante. In pretium lectus non magna condimentum mollis. Aenean tempor dapibus vulputate. Proin id
          lorem vel est vulputate vehicula. Suspendisse facilisis mauris id lobortis iaculis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur
          varius sapien elementum egestas tristique.
        </p>

        <p>
          Nulla facilisi. Donec et rhoncus lectus, vel eleifend libero. Duis vestibulum dictum dolor, eget venenatis
          massa condimentum in. In faucibus, turpis ut tincidunt finibus, mi ipsum posuere felis, at tempus ligula
          turpis nec arcu. Aliquam tempus nisi eget nibh convallis, a maximus velit dictum. Fusce vel fringilla enim.
          Donec a magna sit amet quam scelerisque lacinia.
        </p>

        <p>
          Maecenas sollicitudin diam sed placerat elementum. Praesent pulvinar elit non mattis eleifend. Fusce
          hendrerit, erat ac ultricies facilisis, tellus leo tincidunt ipsum, in pharetra risus ligula eu nisl. Quisque
          ultricies elit eget rutrum egestas. Curabitur gravida nulla venenatis, rhoncus est eu, fermentum risus. Aenean
          vitae posuere urna, vel fermentum nunc. Proin a fringilla libero. Phasellus eu auctor justo. Suspendisse
          fringilla porttitor dictum. Praesent quis auctor justo, auctor fermentum quam.
        </p>
      </div>
    </Screen>
  );
};
