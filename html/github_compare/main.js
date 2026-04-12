function compare() {
  const repo_owner = document.getElementById('repo_owner').value;
  const repo_name = document.getElementById('repo_name').value;
  const base_ref = document.getElementById('base_ref').value;
  const head_ref = document.getElementById('head_ref').value;

  if (repo_owner && repo_name && base_ref && head_ref) {
    window.open(`https://github.com/${repo_owner}/${repo_name}/compare/${base_ref}...${head_ref}`, '_blank');
  }
}
