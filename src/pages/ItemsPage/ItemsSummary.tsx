export const ItemsSummary: React.FC = () => {
  return (
  <div bg="#3c6382" text-white p-12px m-16px b-rounded-8px flex flex-col>
    <div p-b-8px>
      <div text-red p-b-4px>支出</div>
      <div text-22px>￥6328.28</div>
    </div>
    <ol flex text-12px>
      <li flex m-r-16px>
        <div>收入</div>
        <div>￥0.00</div>
      </li>
      <li flex>
        <div>结余</div>
        <div>￥-6328.28</div>
      </li>
    </ol>
  </div>
  )
}
