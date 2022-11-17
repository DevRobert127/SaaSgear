import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Team } from "@/features/admin/team";
import { Table } from '../Common/Table';
import Button from '../Common/Button';

type Props = {
  teams: Team[];
}

const ListTeam: React.FC<Props> = ({ teams }) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <div className="bg-white border border-solid border-dark_grey shadow-xxl rounded-[10px] p-6 mb-[25px] sm:px-[10px] sm:py-6">
      <h5 className="font-bold text-[22px] leading-[30px] text-sapphire_blue mb-8"> {t('Team.list_team')}</h5>
      <Table>
        <thead>
          <tr>
            <th>{t('Team.text.name')}</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((it) => (
            <tr key={it.teamID}>
              <td>{it.teamName}</td>
              <td className="w-1/5 text-right [&_a]:text-[inherit] [&_a:last-child]:ml-[20px]">
                <Link to={`/teams/edit/${it.teamID}`}>{t('Common.text.edit')}</Link>
                <Link to="/teams">{t('Common.text.delete')}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="primary" onClick={() => history.push('/teams/new')} className="mt-8">
        {t('Team.text.add')}
      </Button>
    </div>
  );
}

export default ListTeam;
