import { TabsWrapper, TabItem, TabName } from './styles';

export default function Tabs({ tab, onClickTabs }: { tab: number; onClickTabs: React.MouseEventHandler }) {
  return (
    <nav>
      <TabsWrapper onClick={onClickTabs}>
        {[
          ['전체', 0],
          ['문화활동', 1],
          ['운동/액티비티', 2],
          ['음식', 3],
          ['취미/창작', 4],
          ['여행', 5],
        ].map((category) => (
          <TabItem key={category[0]}>
            <TabName selected={tab === category[1]} id={String(category[1])}>
              {category[0]}
            </TabName>
          </TabItem>
        ))}
      </TabsWrapper>
    </nav>
  );
}
