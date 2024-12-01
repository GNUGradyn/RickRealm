import React, { ReactNode, useState } from 'react';
import './App.css';
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import PlayerInstance from './types/PlayerInstance';
import Player from './components/Player';


const App: React.FC = () => {

  const [items, setItems] = useState<PlayerInstance[]>([]);
  
  const loadMoreItems = () => {
    
  }

  return (
    <div className="App">
      <AutoSizer>
        {({ height, width }) =>
          <InfiniteLoader
            isItemLoaded={() => true}
            itemCount={items.length}
            loadMoreItems={loadMoreItems}
          >
            {({ onItemsRendered, ref }) => (
              <Grid
                columnCount={Math.max(...items.map(instance => instance.x))}
                rowCount={Math.max(...items.map(instance => instance.y))}
                height={height}
                width={width}
                rowHeight={height / 3.5}
                columnWidth={width / 3.5}
              >
                {Player}
              </Grid>
            )}
          </InfiniteLoader>}
      </AutoSizer>;

    </div>
  );
}

export default App;
