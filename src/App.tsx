import React, { ReactNode, useState } from 'react';
import './App.css';
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import Player from './components/PlayerCell';


const App: React.FC = () => {

  const [rowCount, setRowCount] = useState<number>(0);
  const [columnCount, setColumnCount] = useState<number>(0);

  return (
    <div className="App">
      <AutoSizer>
        {({ height, width }: Size) =>
          <InfiniteLoader
            isItemLoaded={() => false}
            itemCount={columnCount * rowCount}
            loadMoreItems={() => {}}
          >
            {({ onItemsRendered, ref }) => (
              <Grid
                columnCount={columnCount}
                rowCount={rowCount}
                height={height}
                width={width}
                rowHeight={height / 3.5}
                columnWidth={width / 3.5}
                onItemsRendered={onItemsRendered}
                ref={ref}
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
