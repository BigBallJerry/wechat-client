import { DocumentData, DocumentSnapshot, doc, getDoc, getDocs, query, collection, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

let cache: { [key: string]: any } = {};

export const useUsersInfo = (userIds: string[]) => {
  const [data, setData] = useState<DocumentSnapshot<DocumentData>[] | null>(
    userIds.every((id) => cache[id]) ? userIds.map((id) => cache[id]) : null
  );
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!userIds || userIds.length === 0 || typeof userIds === 'undefined') {
      console.log('useUsersInfo empty userIds');
      console.log(userIds);
      return null;
    }

    try {
      console.log('useUsersInfo uid=', userIds, cache);
      (async () => {
        const response = await Promise.all(
          userIds.map(async (id) => {
            if (cache[id]) return cache[id];
            const docRef = doc(db, 'users', id);
            const res = await getDoc(docRef);
            cache[id] = res.data();
            console.log('useUsersInfo::useEffect::fetedUserInfo=', res.data());
            return res.data();
          })
        );

        setData(response);
        setLoading(false);
        setError(false);
      })();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }, [JSON.stringify(userIds)]);

  return { data, loading, error };
};
