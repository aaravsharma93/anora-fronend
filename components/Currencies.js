import { Dialog, IconButton } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Close as CloseIcon, Dehaze } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Settings, Splitscreen, SyncAlt } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Router, { withRouter } from "next/router";
import CurrenciesCard from "../components/Cards/CurrenciesCard";
import useSettings from "../hooks/useSettings";
import FilterDialog from "./FilterDialog";
import BasicTable from "./SemiChart/Table";

const marks = [
  {
    value: 0,
    label: "+50%",
  },
  {
    value: 50,
    label: "10%",
  },
  {
    value: 90,
    label: "-50%",
  },
];

function valuetext(value) {
  return `${value}%`;
}

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const Currencies = ({ currencies, router, total }) => {
  const theme =useTheme();
  const { themeMode } = useSettings();
  const [view, setView] = useState("grid");
  const [open, setOpen] = useState(false);
  const [showShortOptions, setShowShortOptions] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [pageSize, setPageSize] = useState(25);
  const [isLoading, setLoading] = useState(false); //State for the loading indicator
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(total / pageSize);
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    setTotalPages(Math.floor(total / pageSize));
  }, [pageSize]);

  useEffect(
    () => {
      Router.events.on("routeChangeStart", startLoading);
      Router.events.on("routeChangeComplete", stopLoading);
    },
    () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    }
  );

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const closeFilterDialog = () => {
    setOpen(false);
  };
  const paginationHandler = (event, page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page;
    router.push(
      { pathname: currentPath, query: currentQuery },
      {},
      {
        scroll: false,
      }
    );
    setPageNumber(page);
  };

  const changePageSize = (event) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.limit = event.target.value;
    router.push(
      { pathname: currentPath, query: currentQuery },
      {},
      {
        scroll: false,
      }
    );
    setPageSize(event.target.value);
  };

  const save = () => {};

  const filters = [
    {
      name: "categories",
      label: "Categories",
      active: true,
      selected: false,
      onClick: () => {},
    },
    {
      name: "customize",
      icon: <Settings fontSize="small" className="mx-1" />,
      label: "Customize",
      selected: false,
      active: false,
      onClick: () => {},
    },
    {
      name: "sort",
      label: "Sort",
      icon: <SyncAlt style={{ transform: "rotate(90deg)" }} fontSize="small" className="mx-1" />,
      selected: true,
      active: false,
      onClick: () => {
        setShowShortOptions(!showShortOptions);
      },
    },
    {
      name: "filters",
      label: "Filters",
      icon: <i className="fas fa-list-ul mx-1" />,
      selected: false,
      active: false,
      onClick: () => {
        setFilterOpen(true);
      },
    },
  ];
  const getPagination = (tablet, mobile, desktop) => {
    return (
      <Grid item xs={12} className="pagination-container d-flex justify-content-center">
        <Stack spacing={1}>
          <Pagination
            hideNextButton
            hidePrevButton
            count={totalPages}
            variant="outlined"
            color="primary"
            page={pageNumber}
            onChange={paginationHandler}
            size={desktop?'large':'small'}
          />
        </Stack>
      </Grid>
    );
  };
  return (
    <>
      <div className="filter-dialog">
        <Dialog
          maxWidth="sm"
          onClose={() => {
            closeFilterDialog();
          }}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className={`${themeMode === "dark" ? "background-dark" : "background-light"} px-0 px-md-3`}>
            <DialogTitle
              id="customized-dialog-title"
              onClose={() => {
                closeFilterDialog();
              }}
            ></DialogTitle>

            <DialogContent>
              <form noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h5 className={`${themeMode === "dark" ? "title-dark" : "title-light"}`}>More Filters</h5>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={`${themeMode === "dark" ? "group-dark" : "group-light"} filter-form-group`}>
                      <button className=" fw-600">ALL CRYPTOCURRENCIES</button>
                      <button className="active fw-600">COINS</button>
                      <button className=" fw-600">TOKENS</button>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Accordion className={`${themeMode === "dark" ? "accordion-dark" : "accordion-light"}`}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="accordian-title" style={{ letterSpacing: "1px" }}>
                          PRICE
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item xs={12}>
                    <Accordion className={`${themeMode === "dark" ? "accordion-dark" : "accordion-light"}`}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="accordian-title" style={{ letterSpacing: "1px" }}>
                          %AVERAGE CHANGE
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="w-100">
                          <Slider
                            track="inverted"
                            aria-labelledby="track-inverted-range-slider"
                            getAriaValueText={valuetext}
                            defaultValue={[50, 80]}
                            marks={marks}
                          />
                          <div className="ms-2">
                            <FormControl component="fieldset" className="w-100">
                              <FormGroup aria-label="position">
                                <div className="w-100 d-flex flex-column flex-md-row justify-content-between">
                                  <FormControlLabel
                                    value=""
                                    control={<Checkbox color="info" defaultChecked />}
                                    label="+10% to +50%"
                                    labelPlacement="end"
                                    className="average-checkbox"
                                  />

                                  <FormControlLabel
                                    value=""
                                    control={<Checkbox color="info" />}
                                    label="+0% to +0%"
                                    labelPlacement="end"
                                    className="average-checkbox"
                                  />

                                  <FormControlLabel
                                    value=""
                                    control={<Checkbox color="info" />}
                                    label="-10% to 0%"
                                    labelPlacement="end"
                                    className="average-checkbox"
                                  />

                                  <FormControlLabel
                                    value=""
                                    control={<Checkbox color="info" />}
                                    label="-50%"
                                    labelPlacement="end"
                                    className="average-checkbox"
                                  />
                                </div>
                              </FormGroup>
                            </FormControl>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>

                  <Grid item xs={12}>
                    <Accordion className={`${themeMode === "dark" ? "accordion-dark" : "accordion-light"}`}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="accordian-title" style={{ letterSpacing: "1px" }}>
                          MARCET CAP
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                  <Grid item xs={12}>
                    <Accordion className={`${themeMode === "dark" ? "accordion-dark" : "accordion-light"}`}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="accordian-title" style={{ letterSpacing: "1px" }}>
                          VOLUME
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>
              </form>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  closeFilterDialog();
                }}
                className={`${themeMode === "dark" ? "cancel-dark" : "cancel-light"}`}
              >
                Cancel
              </Button>

              <Button
                onClick={() => {
                  save();
                }}
                className="apply-filter-btn me-2"
              >
                Apply Filter
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>

      <div className={`ms-lg-5 CurrenciesContainer p-4 ${themeMode === "dark" && "bg-dark"}`}>
        <div className="head px-4 font-monospace">
          <h2 className="fs-3 my-1 mt-3 d-block">TOP 100 CRYPTOCURRENCIES</h2>
          <Grid container className="filter" alignItems="center">
            <Typography variant="body2" component={Grid} item xs className="text-uppercase fundamental-title">
              by fundamental
            </Typography>
            <Typography variant="body1">Cryptocurrencies</Typography>
            {filters.map((data, index) => (
              <Grid key={index} className="px-2 my-2" xs={desktop?"":12}>
                <a
                  onClick={data.onClick}
                  className={classNames("filter-button", {
                    active: data.active,
                    selected: data.selected,
                  })}
                >
                  {data.icon && data.icon} {data.label}
                </a>
              </Grid>
            ))}
            <Grid className="change-view-container my-2" xs={5} md={1}>
              <div
                className={classNames("change-view-button", { active: view === "grid" })}
                onClick={() => setView("grid")}
              >
                <Splitscreen fontSize="small" />
              </div>
              <div
                className={classNames("change-view-button", { active: view === "list" })}
                onClick={() => setView("list")}
              >
                <Dehaze fontSize="small" />
              </div>
            </Grid>
            <Grid className="page-size-container my-2" xs={6} md={1}>
              <FormControl fullWidth sx={{ m: 1, minWidth: 75 }}>
                <InputLabel id="change-page-size-label">Page Size</InputLabel>
                <Select
                  labelId="change-page-size-label"
                  id="page-size-select"
                  value={pageSize}
                  label="Page Size"
                  onChange={changePageSize}
                >
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={75}>75</MenuItem>
                  <MenuItem value={100}>100</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          {showShortOptions && (
            <Grid
              container
              spacing={3}
              className={`${themeMode === "dark" ? "more-filters-dark" : "more-filters-light"} my-3 more-filters`}
            >
              <Grid item xs={12} sm={8}>
                <Grid container spacing={3}>
                  <Grid item>
                    <select>
                      <option>PLATFORMS</option>
                    </select>
                  </Grid>

                  <Grid item>
                    <select>
                      <option>CATEGORY</option>
                    </select>
                  </Grid>

                  <Grid item>
                    <select>
                      <option>ALGORITHM</option>
                    </select>
                  </Grid>

                  <Grid item>
                    <div
                      className={`${themeMode === "dark" ? "more-filter-dark" : "more-filter-light"} filter-btn`}
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      MORE FILTER
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Grid container spacing={3} className="justify-content-end">
                  <Grid item>
                    <div className={`${themeMode === "dark" ? "clear-filter-dark" : "clear-filter-light"} filter-btn`}>
                      CLEAR FILTERS
                    </div>
                  </Grid>

                  <Grid item>
                    <div className={`${themeMode === "dark" ? "clear-filter-dark" : "clear-filter-light"} filter-btn`}>
                      <i className="fas fa-search pe-2"></i>Search coin
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </div>
        {getPagination(tablet, mobile, desktop)}
        {view === "list" ? (
          <div className="mt-3">
            <BasicTable data={currencies} />
          </div>
        ) : (
          <>
            <div className="CurrenciesContainer-Offset">
              {currencies.map((currency) => (
                <CurrenciesCard key={currency.id} currency={currency} />
              ))}
            </div>
          </>
        )}
        {getPagination(tablet, mobile, desktop)}
      </div>
      <FilterDialog open={filterOpen} onClose={() => setFilterOpen(close)} />
    </>
  );
};
export default withRouter(Currencies);
