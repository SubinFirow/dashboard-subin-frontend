import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { selectData, setData } from "@/app/redux/slices/dataSlice";
import toast, { Toaster } from "react-hot-toast";
import { getData } from "@/app/services/authService";
import moment from "moment/moment";

const Datatable = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });
  const [rowCount, setRowCount] = React.useState(0);

  const fetch = async () => {
    try {
      const response = await getData(
        paginationModel.page,
        paginationModel.pageSize
      );
      dispatch(setData(response));
    } catch (error) {
      toast.error(error.message || "Data fetch failed. Please try again.");
    }
  };

  React.useEffect(() => {
    fetch();
  }, [paginationModel]);

  const rows = data?.data?.map((item, index) => ({
    id: item._id || index,
    added: item.added,
    country: item.country,
    end_year: item.end_year,
    impact: item.impact,
    insight: item.insight,
    intensity: item.intensity,
    likelihood: item.likelihood,
    pestle: item.pestle,
    published: item.published,
    region: item.region,
    relevance: item.relevance,
    sector: item.sector,
    source: item.source,
    start_year: item.start_year,
    title: item.title,
    topic: item.topic,
    url: item.url,
  }));

  const columns = [
    {
      field: "added",
      headerName: "Added",
      width: 120,
      renderCell: (value) => {
        return moment(value).format("DD MMM YYYY");
      },
    },
    { field: "country", headerName: "Country", width: 130 },
    { field: "end_year", headerName: "End Year", width: 100 },
    { field: "impact", headerName: "Impact", width: 80 },
    { field: "insight", headerName: "Insight", width: 250 },
    { field: "intensity", headerName: "Intensity", width: 100 },
    { field: "likelihood", headerName: "Likelihood", width: 100 },
    { field: "pestle", headerName: "PESTLE", width: 120 },
    { field: "published", headerName: "Published", width: 180 },
    { field: "region", headerName: "Region", width: 130 },
    { field: "relevance", headerName: "Relevance", width: 100 },
    { field: "sector", headerName: "Sector", width: 100 },
    { field: "source", headerName: "Source", width: 200 },
    { field: "start_year", headerName: "Start Year", width: 100 },
    { field: "title", headerName: "Title", width: 350 },
    { field: "topic", headerName: "Topic", width: 120 },
    {
      field: "url",
      headerName: "URL",
      width: 300,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      ),
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Toaster />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[10]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
        rowCount={data.totalItems}
      />
    </div>
  );
};

export default Datatable;
