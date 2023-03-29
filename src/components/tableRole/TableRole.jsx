import React, { useEffect, useState } from 'react';
import icon3 from '../../images/Union.png'
import './tableRole.css';
import { useDispatch, useSelector } from 'react-redux';
import authorActions from '../../store/authors/actions.js';
import companyActions from '../../store/Company/actions.js';
//import InputActive from '../ImputActive/ImputActive';
import captureActions from '../../store/Capture/actions.js';
import Company from '../../components/CompanyTable/companyTable';
import Author from '../../components/AuthorTable/AuthorTable';

const { captureState } = captureActions;
const { read_all_authors } = authorActions;
const { read_all_companies } = companyActions;

export default function TableRole() {
  const dispatch = useDispatch();
  const [isCompany, setIsCompany] = useState(true);
  const activeData = useSelector((store) =>
    isCompany ? store.Company.activeCompany : store.author.activeAuthor
  );
  const inactiveData = useSelector((store) =>
    isCompany ? store.Company.inactiveCompany : store.author.inactiveAuthor
  );

  function handleIsCompany() {
    setIsCompany(true);
    dispatch(captureState({ buttonState: false }));
  }

  function handleIsAuthor() {
    setIsCompany(false);
    dispatch(captureState({ buttonState: true }));
  }

  useEffect(() => {
    dispatch(read_all_authors());
    dispatch(read_all_companies());
  }, []);

  const allData =
    inactiveData && activeData
      ? [...Object.values(inactiveData), ...Object.values(activeData)].sort(
          (a, b) => a.active - b.active
        )
      : [];
const showAuthor = !isCompany;

  return (
    <div>
      <div className="btn-companie-active">
        <button
          className={isCompany ? 'btn-isCompanie prueba-companie' : 'btn-isCompanie'}
          onClick={handleIsCompany}
        >
          Companies
        </button>
        <button
          className={showAuthor ? 'btn-isCompanie prueba-companie' : 'btn-isCompanie'}
          onClick={handleIsAuthor}
        >
          Authors
        </button>
      </div>
      {isCompany ? (
        <Company data={allData} icon={icon3} column1="name" column2="website" column3="logo" />
      ) : (
        <Author data={allData} icon={icon3} column1="name" column2="city" column3="photo" />
      )}
    </div>
  );
}