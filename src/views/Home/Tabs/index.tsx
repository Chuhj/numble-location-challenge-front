import { TabsWrapper, TabItem, TabName } from './styles';

export default function Tabs() {
  return (
    <nav>
      <TabsWrapper>
        <TabItem>
          <TabName selected>전체</TabName>
        </TabItem>
        <TabItem>
          <TabName>문화활동</TabName>
        </TabItem>
        <TabItem>
          <TabName>운동/액티비티</TabName>
        </TabItem>
        <TabItem>
          <TabName>음식</TabName>
        </TabItem>
        <TabItem>
          <TabName>취미/창작</TabName>
        </TabItem>
        <TabItem>
          <TabName>여행</TabName>
        </TabItem>
      </TabsWrapper>
    </nav>
  );
}
