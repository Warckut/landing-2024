import { useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow_down.svg';
import Checkbox from '../Checkbox/Checkbox';
import cl from './FormInput.module.css';

const data = [
  { id: '1', name: 'Группа 1', parentId: null },
  {
    id: '1.1',
    name: 'Группа 1.1',
    parentId: '1',
  },
  {
    id: '1.2',
    name: 'Группа 1.2',
    parentId: '1',
  },
  {
    id: '1.3',
    name: 'Группа 1.3',
    parentId: '1',
  },
  {
    id: '1.3.1',
    name: 'Группа 1.3.1',
    parentId: '1.3',
  },
  {
    id: '1.3.2',
    name: 'Группа 1.3.2',
    parentId: '1.3',
  },
  {
    id: '1.3.3',
    name: 'Группа 1.3.3',
    parentId: '1.3',
  },
  {
    id: '1.4',
    name: 'Группа 1.4',
    parentId: '1',
  },
  {
    id: '1.4.1',
    name: 'Группа 1.4.1',
    parentId: '1.4',
  },
  {
    id: '1.4.2',
    name: 'Группа 1.4.2',
    parentId: '1.4',
  },
  {
    id: '1.4.3',
    name: 'Группа 1.4.3',
    parentId: '1.4',
  },
  {
    id: '1.5',
    name: 'Группа 1.5',
    parentId: '1',
  },
  {
    id: '1.5.1',
    name: 'Группа 1.5.1',
    parentId: '1.5',
  },
  {
    id: '1.5.2',
    name: 'Группа 1.5.2',
    parentId: '1.5',
  },
  {
    id: '1.5.3',
    name: 'Группа 1.5.3',
    parentId: '1.5',
  },
  {
    id: '1.6',
    name: 'Группа 1.6',
    parentId: '1',
  },
  {
    id: '1.7',
    name: 'Группа 1.7',
    parentId: '1',
  },
  { id: '2', name: 'Группа 2', parentId: null },
  {
    id: '2.1',
    name: 'Группа 2.1',
    parentId: '2',
  },
  {
    id: '2.1.1',
    name: 'Группа 2.1.1',
    parentId: '2.1',
  },
  {
    id: '2.1.2',
    name: 'Группа 2.1.2',
    parentId: '2.1',
  },
  {
    id: '2.2',
    name: 'Группа 2.2',
    parentId: '2',
  },
  {
    id: '2.2.1',
    name: 'Группа 2.2.1',
    parentId: '2.2',
  },
  {
    id: '2.2.2',
    name: 'Группа 2.2.2',
    parentId: '2.2',
  },
  {
    id: '2.2.3',
    name: 'Группа 2.2.3',
    parentId: '2.2',
  },
  {
    id: '3',
    name: 'Группа 3',
    parentId: null,
  },
];

function calcMargin(group) {
  const level = group.id.split('.').length - 1;
  return `${level * 20}px`;
}

export default function FormInputSelect({ fieldName }) {
  const [selected, setSelected] = useState([]);
  const [isShowMenu, setShowMenu] = useState(false);
  const selectRef = useRef(null);

  function onCheck(e) {
    if (e.target.checked) {
      const newGroups = data.filter((item) => item.id.startsWith(e.target.id));
      const necessaryGroups = newGroups.filter((item) => !selected.includes(item.id));
      setSelected((selected) => [...selected, ...necessaryGroups.map((item) => item.id)]);
      markGroupOut(e.target.id);
    } else {
      unmarkGroupOut(e.target.id);
      const newGroups = data.filter((item) => item.id.startsWith(e.target.id));
      setSelected((selected) => selected.filter((item1) => !newGroups.map((item2) => item2.id).includes(item1)));
    }
  }

  function markGroupOut(groupId) {
    const group = data.find((item) => item.id === groupId);
    const parent = data.find((item) => item.id === group.parentId);
    if (!parent) return;

    markGroupOut(parent.id);
    const children = data.filter((item) => item.parentId === parent.id);
    const selectedChildren = [...selected, groupId];
    if (children.every((item) => selectedChildren.includes(item.id)))
      setSelected((selected) => [...selected, parent.id]);
  }

  function unmarkGroupOut(groupId) {
    const group = data.find((item) => item.id === groupId);
    const parent = data.find((item) => item.id === group.parentId);
    if (!parent) return;

    unmarkGroupOut(parent.id);
    setSelected((selected) => selected.filter((item) => item !== parent.id));
  }

  function handleShowSelect(e) {
    e.stopPropagation();
    setShowMenu(!isShowMenu);
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (selectRef.current?.contains(e.target)) return;
      else setShowMenu(false);
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={cl.formInput}>
      <label className={`${cl.label} body-s`} htmlFor={fieldName}>
        {fieldName}
      </label>
      <div className={`${cl.input} ${cl.customSelect} body-m`} onClick={handleShowSelect}>
        <span>Группы</span>
        <span className={cl.arrowSelect}>
          <ArrowDown />
        </span>
      </div>

      {isShowMenu && (
        <ul className={cl.options} ref={selectRef}>
          <li>
            <Checkbox id={'Выбрать все'} children={'Выбрать все'} />
          </li>
          {data.map((group) => {
            return (
              <li key={group.id} style={{ marginLeft: calcMargin(group) }}>
                <Checkbox
                  id={group.id}
                  children={group.name}
                  onChecked={onCheck}
                  checked={selected.includes(group.id)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
