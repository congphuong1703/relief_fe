import {Table} from "antd";

const TableCustom = (props) => {
    const {setDataFilter, dataTable} = props
    const onChangeTable = (sorter => {
        let orderType = 'ASC';
        if (sorter) {
            if (sorter.order === 'ascend') {
                orderType = 'ASC';
            } else if (sorter.order === 'descend') {
                orderType = 'DESC';
            }
            if (sorter.column !== undefined) {
                if (setDataFilter) {
                    setDataFilter({
                        sortBy: sorter.column.dataIndex,
                        sortType: orderType,
                    });
                }
            }
        }
    })
    const showTotal = (total, range) => {
        return `Hiển thị ${range[0]} đến ${range[1]} của ${total} bản ghi`;
    };
    return (
        <Table
            {...props}
            dataSource={dataTable.data ? dataTable.data : dataTable}
            bordered={false}
            pagination={{
                showTotal,
                total: dataTable.total,
                current: dataTable.page,
                pageSize: dataTable.size,
                onChange: (page, pageSize) => {
                    if (setDataFilter) {
                        setDataFilter({
                            page,
                            pageSize,
                        });
                    }
                },
            }}
            onChange={(sorter) => {
                onChangeTable(sorter);
            }}
        />
    )
}
export default TableCustom